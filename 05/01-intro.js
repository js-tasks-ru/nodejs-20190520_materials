const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/nodejs-test');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'Укажите email',
    unique: true,
  },
  displayName: {
    type: String,
    index: true,
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true, // createdAt, updatedAt
});

userSchema.index({displayName: 1, age: -1}); // find({displayName: 'Ivan', age: 10})

const User = mongoose.model('User', userSchema);

const mary = new User({
  email: 'mary@mail.com',
  displayName: 'Mary',
  age: 18,
});

User.deleteMany({})
    .then(() => {
      return mary.save();
    })
    .then((user) => {
      console.log(user);

      return User.findOne({
        email: 'mary@mail.com',
      });
    })
    .then((user) => {
      console.log(user);

      user.age = 20;
      return user.save();
    })
    .catch(console.error)
    .finally(() => {
      mongoose.disconnect();
    });
