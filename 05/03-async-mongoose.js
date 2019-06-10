const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/test');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'Укажите email',
    unique: true,
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

async function createUsers() {
  await User.deleteMany({});
  await User.create({email: 'john@gmail.com'});
  await User.create({email: 'john@gmail.com'});
  await User.create({email: 'mary@gmail.com'});

  return 'done';
}

createUsers()
    .then(console.log)
    .catch(console.error)
// .catch(err => {
//   console.log(Object.keys(err.errors).map(key => ({key, msg: err.errors[key].message})))
// })
    .finally(() => mongoose.disconnect());

/*
* Vasya 100
* Masha 50
* */

// TRANSACTION BEGIN
// Vasya -50

// TRANSACTION END

// Vasya 50
// Masha 100
