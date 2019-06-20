const GithubStrategy = require('passport-github').Strategy;
const config = require('config');
const get = require('lodash/get');
const authenticate = require('./authenticate');

module.exports = new GithubStrategy({
  clientID: config.get('providers.github.app_id'),
  clientSecret: config.get('providers.github.app_secret'),
  callbackURL: config.get('providers.github.callback_uri'),
  scope: ['user:email'],
  session: false,
}, function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  authenticate('github', get(profile, 'emails[0].value'), profile.username, done);
}
);
