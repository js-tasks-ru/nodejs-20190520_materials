const path = require('path');
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '../config');

const mongoose = require('mongoose');
const authenticate = require('../libs/strategies/authenticate');
const expect = require('chai').expect;
const User = require('../models/User');
const users = require('../fixtures/users');

describe('7-module-2-task', () => {
  describe('authenticate function', function() {
    before(async () => {
      await User.deleteMany();

      for (const user of users) {
        const u = new User(user);
        await u.setPassword(user.password);
        await u.save();
      }
    });

    after(async () => {
      await User.deleteMany({});
      mongoose.disconnect();
    });

    it('функция authenticate должна возвращать ошибку, если email не передаётся', (done) => {
      authenticate('vkontakte', undefined, 'name', (err, user, msg) => {
        if (err) return done(err);

        expect(user).to.be.false;
        expect(msg).to.equal('Не указан email');
        done();
      });
    });

    it('функция authenticate должна создавать пользователя если его еще нет', (done) => {
      authenticate('vkontakte', 'newuser@mail.com', 'name', (err, user) => {
        if (err) return done(err);

        expect(user.email).to.equal('newuser@mail.com');
        User.findOne({email: 'newuser@mail.com'}, (err, usr) => {
          if (err) return done(err);

          expect(usr.email).to.equal('newuser@mail.com');
          done();
        });
      });
    });

    it('функция authenticate выбрасывает ошибку если email невалидный', (done) => {
      authenticate('vkontakte', 'emailemailemail', 'name', (err, user) => {
        expect(err.name).to.equal('ValidationError');
        expect(err.errors.email.message).to.equal('Некорректный email.');
        done();
      });
    });

    it('функция authenticate возвращает пользователя, который уже есть в базе', (done) => {
      authenticate('vkontakte', 'user1@mail.com', 'user1', (err, user) => {
        if (err) return done(err);

        expect(user.email).to.equal('user1@mail.com');
        done();
      });
    });
  });
});
