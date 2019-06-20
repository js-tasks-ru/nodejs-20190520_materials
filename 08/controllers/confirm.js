const User = require('../models/User');

module.exports = async function confirm(ctx) {
  const user = await User.findOne({
    verificationToken: ctx.request.body.verificationToken,
  });

  if (!user) {
    ctx.throw(400, 'Ссылка подтверждения недействительна или устарела');
  }

  user.verificationToken = undefined;
  await user.save();

  const token = await ctx.login(user);

  ctx.body = {token};
};
