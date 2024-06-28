require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust path as needed

// MongoDB connection setup
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(async () => {
  console.log('Connected to MongoDB');

  // Sample users data with rating and reason
  const sampleUsers = [
    {
      name: "Cersei Lannister",
      email: "lena_headey@gameofthron.es",
      password: "$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m",
      rating: "-100/10",
      reason: "Inappropriate relations with one brother, very ablist to the other brother"
    },
    {
      name: "Arya Stark",
      email: "maisie_williams@gameofthron.es",
      password: "$2b$12$19h3KjeTg3/sPNFHztdb6eGWKrCxIwlVXVSh9POSi5PS9kSlguZEq",
      rating: "-11/10",
      reason: "Many faces, and killed the night-king"
    },
    {
      name: "Khal Drogo",
      email: "jason_momoa@gameofthron.es",
      password: "$2b$12$7tgpVkBxUqQiYFkHjZyoMuEzFU5BSI.FYkOXHu4zCRlRsa15sHQo6",
      rating: "4/10",
      reason: "cool hair but didn't last very long"
    },
    {
      name: "Sansa Stark",
      email: "sophie_turner@gameofthron.es",
      password: "$2b$12$nCIVE81..AtAoysPZkl19.G5V0EdIwwsZh1f18lxWEr3dlpG/Uusi",
      rating: "10/10",
      reason: "Queen of the North"
    },
    {
      name: "Petyr Baelish",
      email: "aidan_gillen@gameofthron.es",
      password: "$2b$12$qM.YvmiekyYYY7p7phpK3OicbRCDkN7ESwYAnG/o9YnfHC0Mhkmbi",
      rating: "7.5/10",
      reason: "Master manipulator and habitual liar too."
    }
  ];

  try {
    // Insert sampleUsers into MongoDB
    const insertedUsers = await User.insertMany(sampleUsers);
    console.log('Sample users inserted:', insertedUsers);
  } catch (err) {
    console.error('Error inserting sample users:', err.message);
  }

  mongoose.connection.close(); // Close MongoDB connection
})
.catch(err => console.error('MongoDB connection error:', err.message));