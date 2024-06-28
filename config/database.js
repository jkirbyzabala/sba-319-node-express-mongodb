// database.js

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // Optional in Mongoose v6 and above
  useUnifiedTopology: true, // Required for MongoDB's new Server Discovery and Monitoring engine
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err.message));

module.exports = mongoURI;
