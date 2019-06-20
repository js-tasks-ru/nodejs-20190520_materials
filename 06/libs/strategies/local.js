const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(
    // ctx.request.body{email,password}
    {usernameField: 'email', session: false},
    function(email, password, done) {
      done(null, false, 'локальная стратегия подключена, но не настроена');
    }
);
