const mongoose = require('mongoose');
const crypto = require('crypto');
const connection = require('../libs/connection');
const config = require('config');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'E-mail пользователя не должен быть пустым.',
    validate: [
      {
        validator(value) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        message: 'Некорректный email.',
      },
    ],
    unique: 'Такой email уже существует',
  },
  displayName: {
    type: String,
    required: 'У пользователя должно быть имя',
    unique: 'Такое имя уже существует',
  },
  passwordHash: {
    type: String,
  },
  salt: {
    type: String,
  },
  providers: [{
    name: {
      type: String,
      enum: ['facebook', 'vkontakte', 'github']
    },
    email: String,
    id: String,
  }]
}, {
  timestamps: true,
});

// 10000 top popular passwords (sha512) => [hash1, hash2, hash3]

// generateHash('sha512', password + salt) => hash

function generatePassword(salt, password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
        password, salt,
        config.get('password.iterations'), config.get('password.keylength'),
        'sha512',
        (err, key) => {
          if (err) return reject(err);
          resolve(key.toString('hex'));
        }
    );
  });
}

userSchema.methods.setPassword = async function setPassword(password) {
  this.salt = crypto.randomBytes(config.get('password.bytes')).toString('hex');
  this.passwordHash = await generatePassword(this.salt, password);
};

userSchema.methods.checkPassword = async function(password) {
  if (!password) return false;

  const hash = await generatePassword(this.salt, password);
  return hash === this.passwordHash;
};

module.exports = connection.model('User', userSchema);
