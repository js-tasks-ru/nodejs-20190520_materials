module.exports = {
  mongodb: {
    uri: 'mongodb://localhost/chat_app',
  },
  password: {
    iterations: 10000,
    keylength: 512,
    bytes: 256,
  },
  providers: {
    github: {
      app_id: process.env.GITHUB_APP_ID || '',
      app_secret: process.env.GITHUB_APP_SECRET || '',
      callback_uri: process.env.GITHUB_CALLBACK_URI || 'http://localhost:3000/oauth/github',
      options: {
        scope: ['user:email'],
      },
    },
    facebook: {
      app_id: process.env.FACEBOOK_APP_ID || '',
      app_secret: process.env.FACEBOOK_APP_SECRET || '',
      callback_uri: process.env.FACEBOOK_CALLBACK_URI || 'http://localhost:3000/oauth/facebook',
      options: {
        scope: ['email'],
      },
    },
    vkontakte: {
      app_id: process.env.VKONTAKTE_APP_ID || '',
      app_secret: process.env.VKONTAKTE_APP_SECRET || '',
      callback_uri: process.env.VKONTAKTE_CALLBACK_URI || 'http://localhost:3000/oauth/vkontakte',
      options: {
        scope: ['email'],
      },
    },
  },
};
