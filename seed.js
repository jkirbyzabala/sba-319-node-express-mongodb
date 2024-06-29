const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/users'); // 

const sampleUsers = [
  {
    name: "Queen Lannister",
    email: "lena_headey@gameofthrones",
    password: "$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m",
    ratings: "-100/10",
    reason: "Inappropriate relations with one brother, very ableist to the other brother"
  },
  {
    name: "Many-Faced God",
    email: "maisie_williams@gameofthrones",
    password: "$2b$12$19h3KjeTg3/sPNFHztdb6eGWKrCxIwlVXVSh9POSi5PS9kSlguZEq",
    ratings: "11/10",
    reason: "Many faces, and killed the night-king"
  },
  {
    name: "Grey Worm",
    email: "noemail@gmail.com",
    password: "$2b$12$7tgpVkBxUqQiYFkHjZyoMuEzFU5BSI.FYkOXHu4zCRlRsa15sHQo6",
    ratings: "4/10",
    reason: "No hair, fiercely loyal"
  },
  {
    name: "Little Finger",
    email: "aidan_gillen@gameofthrones",
    password: "$2b$12$qM.YvmiekyYYY7p7phpK3OicbRCDkN7ESwYAnG/o9YnfHC0Mhkmbi",
    ratings: "-10/10",
    reason: "Master manipulator and habitual liar too."
  }
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Delete all existing documents (optional)
    await User.deleteMany({});

    // Insert new documents
    const result = await User.insertMany(sampleUsers);
    console.log('Sample users inserted:', result);
  })
  .catch(err => console.error('MongoDB connection error:', err.message))
  .finally(() => mongoose.disconnect());
