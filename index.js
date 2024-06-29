// set up Express, connect to MongoDB, and define middleware.

//I am configuring my dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import my routes 
const userRoutes = require('./routes/userRoutes');

//create my express app
const app = express();

//middleware parse JSON
app.use(express.json());

//connect to MongoDBB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, //gives error
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err.message));

//Mount Routes
app.use('/api', userRoutes);

//Start Routes
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
