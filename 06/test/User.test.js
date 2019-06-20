const User = require('../models/User');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('User model', () => {
  after(() => {
    mongoose.disconnect();
  });

  it('should create 2 fields for password', async () => {

    const u = new User({email: 'email1@mail.com', displayName: 'name'});
    await u.setPassword('123123');

    expect(u.salt).to.exist;
    expect(u.passwordHash).to.exist;
  });
});
