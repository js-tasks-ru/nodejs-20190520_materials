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

function createUsers() {
  return User.deleteMany({})
      .then(function() {
        console.log('removed');

        return Promise.all([
          User.create({email: 'john@gmail.com'}).catch(err => err),
          User.create({email: 'pete@gmail.com'}).catch(err => err),
          User.create({email: 'pete@gmail.com'}).catch(err => err),
        ]);
      });
}

createUsers()
    .then((results) => { // [user, err, user]
      console.log(results);
    })
    .catch((err) => {
      console.error(err); // err UNIQUE
    })
    .finally(() => {
      mongoose.disconnect();
    });
