const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  nationality: String,
  films: [String], // Array of film titles
  awards: [String] // Array of award names
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;