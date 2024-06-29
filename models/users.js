//where you put the schema where data is organized

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ratings: {
    type: String, 
  },
  reason: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
