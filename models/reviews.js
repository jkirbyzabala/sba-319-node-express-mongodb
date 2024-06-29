const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieTitle: String,
  reviewerName: String,
  rating: String, 
  comment: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
