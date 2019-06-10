const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

mongoose.plugin(beautifyUnique);

mongoose.connect('mongodb://localhost/test');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'Укажите email',
    unique: 'Email уже занят',
  },
  displayName: {
    type: String,
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

(async () => {
  await User.deleteMany({});

  await User.create({email: 'pete@gmail.com'});
  await User.create({email: 'pete@gmail.com'});
})()
// .catch(err => console.error(err))
    .catch((err) => {
      console.log(Object.keys(err.errors).map((key) => ({key, msg: err.errors[key].message})));
    })
    .then(() => mongoose.disconnect());
