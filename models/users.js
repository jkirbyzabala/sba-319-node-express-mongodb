const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  ratings: {
    type: String, // Keep it a string b/c your ratings format 
    default: 'N/A' // Default value if not provided
  },
  reason: {
    type: String,
    default: 'No reason provided'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes for efficient querying
userSchema.index({ name: 1 }); // Index on the name field for quick lookups

// Validation rules
userSchema.path('ratings').validate(function(value) {

  const regex = /^\d+\/\d+$/; // Matches "digits/digits" format
  return regex.test(value);
}, 'Invalid ratings format');

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;