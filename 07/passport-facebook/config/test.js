module.exports = {
  mongodb: {
    uri: 'mongodb://localhost/chat_app_test',
  },
  providers: {
    facebook: {
      test: {
        login: 'testuser@mail.com',
        password: 'testpassword',
      },
    },
  },
};
