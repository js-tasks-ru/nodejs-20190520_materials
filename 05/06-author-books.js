const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

mongoose.plugin(beautifyUnique);

mongoose.connect('mongodb://localhost/test');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {toJSON: {virtuals: true}, toObject: {virtuals: true}});

authorSchema.virtual('books', {
  ref: 'Book',
  localField: 'name',
  foreignField: 'author',
});

const Author = mongoose.model('Author', authorSchema);

(async function() {
  await Book.deleteMany({});
  await Author.deleteMany({});

  await Book.create({title: 'War And Peace', author: 'Leo Tolstoy'});
  await Book.create({title: 'Anna Karenina', author: 'Leo Tolstoy'});
  await Book.create({title: 'Hadji Murad', author: 'Leo Tolstoy'});

  await Author.create({name: 'Leo Tolstoy'});

  console.log(await Author.findOne({name: 'Leo Tolstoy'}).populate('books'));

  // deep (multi-level) populate: http://mongoosejs.com/docs/populate.html#deep-populate
})().catch(console.error).then(() => mongoose.disconnect());
