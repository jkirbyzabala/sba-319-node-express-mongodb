const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users - Create a new user
router.post('/users', userController.createUser);

// GET /api/users - Get all users
router.get('/users', userController.getUsers);

// GET /api/users/:userId - Get a specific user by ID
router.get('/users/:userId', userController.getUserById);

// PUT /api/users/:userId - Update a user by ID
router.put('/users/:userId', userController.updateUser);

// DELETE /api/users/:userId - Delete a user by ID
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;