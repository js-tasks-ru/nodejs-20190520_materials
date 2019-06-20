const VkontakteStrategy = require('passport-vkontakte').Strategy;
const config = require('config');
const authenticate = require('./authenticate');

module.exports = new VkontakteStrategy({
  clientID: config.get('providers.vkontakte.app_id'),
  clientSecret: config.get('providers.vkontakte.app_secret'),
  callbackURL: config.get('providers.vkontakte.callback_uri'),
  scope: ['user:email'],
  session: false,
}, function(accessToken, refreshToken, params, profile, done) {
  console.log(profile);
  authenticate('vkontakte', params.email, profile.displayName, done);
}
);
