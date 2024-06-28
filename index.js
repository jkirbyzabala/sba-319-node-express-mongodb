// set up Express, connect to MongoDB, and define middleware.

const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/database'); // Import MongoDB connection configuration

const app = express();

// Other server setup and middleware configurations

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});