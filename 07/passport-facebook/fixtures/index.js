const User = require('../models/User');
const mongoose = require('mongoose');
const users = require('./users');

(async () => {
  await User.deleteMany();

  for (const user of users) {
    const u = new User(user);
    await u.setPassword(user.password);
    await u.save();
  }

  mongoose.disconnect();
  console.log(`All done, ${users.length} users have been saved in DB`);
})();
