// MongoDB connection URI and any additional database settings.

const mongoose = require('mongoose');

// MongoDB connection URI 
// Copy from MongoCompass exactly despite password being formatted different
const mongoURI = 'mongodb+srv://jkirbyzabala:13%40Car3fr33@mongopractice.evnby4o.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'You are NOT connected to MongoDB:'));

// Bind connection to open event (to get notification of connection success)
db.once('open', () => {
  console.log('You are now connected to MongoDB');
});

// Export the database connection
module.exports = db;