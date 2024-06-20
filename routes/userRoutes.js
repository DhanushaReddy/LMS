const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get admin by ID
router.get('/users/:id', userController.getUserById);

// Update admin by ID
router.put('/users/:id', userController.updateUserById);

// Delete admin by ID
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;
