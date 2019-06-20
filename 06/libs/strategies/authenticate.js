module.exports = function authenticate(strategy, email, displayName, done) {
  done(null, false, `${strategy} стратегия подключена, но не настроена`);
};
