const mongoose = require('mongoose');
require('dotenv').config();

// Import schemas from models
const User = require('./models/users');
const Review = require('./models/reviews');
const Actor = require('./models/actors'); 

// Sample data
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

const sampleReviews = [
  { movieTitle: 'Inception', reviewerName: 'John Doe', rating: 9, comment: 'Amazing movie with a complex plot!' },
  { movieTitle: 'The Matrix', reviewerName: 'Jane Smith', rating: 8, comment: 'A groundbreaking sci-fi film.' },
  { movieTitle: 'Interstellar', reviewerName: 'Michael Johnson', rating: 10, comment: 'Mind-blowing visuals and story.' },
  { movieTitle: 'The Dark Knight', reviewerName: 'Emily Davis', rating: 9, comment: 'Heath Ledger’s performance was phenomenal.' },
  { movieTitle: 'The Godfather', reviewerName: 'Alice Brown', rating: 10, comment: 'A classic masterpiece.' },
  { movieTitle: 'Pulp Fiction', reviewerName: 'Robert Wilson', rating: 9, comment: 'Unique storytelling and memorable dialogues.' },
  { movieTitle: 'Fight Club', reviewerName: 'Linda Lee', rating: 8, comment: 'A gritty and thought-provoking film.' },
  { movieTitle: 'Forrest Gump', reviewerName: 'James Harris', rating: 9, comment: 'A heartwarming and inspiring story.' },
  { movieTitle: 'The Shawshank Redemption', reviewerName: 'Patricia Clark', rating: 10, comment: 'An exceptional film with a powerful message.' },
  { movieTitle: 'Gladiator', reviewerName: 'David Lewis', rating: 8, comment: 'A thrilling historical epic.' }
];

const sampleActors = [
  { name: 'Leonardo DiCaprio', birthDate: new Date('1974-11-11'), nationality: 'American', films: ['Inception', 'The Revenant'], awards: ['Oscar'] },
  { name: 'Keanu Reeves', birthDate: new Date('1964-09-02'), nationality: 'Canadian', films: ['The Matrix', 'John Wick'], awards: [] },
  { name: 'Christian Bale', birthDate: new Date('1974-01-30'), nationality: 'British', films: ['The Dark Knight', 'American Psycho'], awards: ['Oscar'] },
  { name: 'Meryl Streep', birthDate: new Date('1949-06-22'), nationality: 'American', films: ['The Devil Wears Prada', 'The Iron Lady'], awards: ['Oscar', 'Golden Globe'] },
  { name: 'Tom Hanks', birthDate: new Date('1956-07-09'), nationality: 'American', films: ['Forrest Gump', 'Saving Private Ryan'], awards: ['Oscar'] },
  { name: 'Morgan Freeman', birthDate: new Date('1937-06-01'), nationality: 'American', films: ['The Shawshank Redemption', 'Seven'], awards: ['Oscar'] },
  { name: 'Scarlett Johansson', birthDate: new Date('1984-11-22'), nationality: 'American', films: ['Lost in Translation', 'Black Widow'], awards: [] },
  { name: 'Brad Pitt', birthDate: new Date('1963-12-18'), nationality: 'American', films: ['Fight Club', 'Once Upon a Time in Hollywood'], awards: ['Oscar'] },
  { name: 'Joaquin Phoenix', birthDate: new Date('1974-10-28'), nationality: 'American', films: ['Joker', 'Her'], awards: ['Oscar'] },
  { name: 'Natalie Portman', birthDate: new Date('1981-06-09'), nationality: 'Israeli-American', films: ['Black Swan', 'V for Vendetta'], awards: ['Oscar'] }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(async () => {
    console.log('Connected to MongoDB');

    // Optionally, delete all existing documents from each collection
    await User.deleteMany({});
    await Review.deleteMany({});
    await Actor.deleteMany({});

    // Insert new documents into each collection
    const insertedUsers = await User.insertMany(sampleUsers);
    console.log('Sample users inserted:', insertedUsers);

    const insertedReviews = await Review.insertMany(sampleReviews);
    console.log('Sample reviews inserted:', insertedReviews);

    const insertedActors = await Actor.insertMany(sampleActors);
    console.log('Sample actors inserted:', insertedActors);
  })
  .catch(err => console.error('MongoDB connection error:', err.message))
  .finally(() => mongoose.disconnect());
