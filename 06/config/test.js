module.exports = {
  mongodb: {
    uri: 'mongodb://localhost/chat_app_test',
  },
  password: {
    iterations: process.env.ITERATIONS || 1,
    keylength: 10,
    bytes: 16,
  },
};
