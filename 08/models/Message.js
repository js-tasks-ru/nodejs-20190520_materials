const mongoose = require('mongoose');
const connection = require('../libs/connection');

const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

});

module.exports = connection.model('Message', messageSchema);
