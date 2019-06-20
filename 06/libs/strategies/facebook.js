const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('config');
const get = require('lodash/get');
const authenticate = require('./authenticate');

module.exports = new FacebookStrategy({
  clientID: config.get('providers.facebook.app_id'),
  clientSecret: config.get('providers.facebook.app_secret'),
  callbackURL: config.get('providers.facebook.callback_uri'),
  profileFields: ['displayName', 'email'],
  session: false,
}, function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  authenticate('facebook', get(profile, 'emails[0].value'), profile.displayName, done);
}
);
