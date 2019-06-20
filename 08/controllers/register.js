const uuid = require('uuid/v4');
const User = require('../models/User');
const sendMail = require('../libs/sendMail');

module.exports = async function register(ctx, next) {
  const verificationToken = uuid();
  const user = new User({
    email: ctx.request.body.email,
    displayName: ctx.request.body.displayName,
    verificationToken,
  });

  await user.setPassword(ctx.request.body.password);
  await user.save();

  await sendMail({
    to: user.email,
    subject: 'Подтвердите почту',
    locals: {token: verificationToken},
    template: 'confirmation',
  });

  ctx.body = {status: 'ok'};
};
