const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

// Create user
router.post('/users', authenticateToken, authorizeRoles(['admin']), userController.createUser);

// Get all users
router.get('/users', authenticateToken, authorizeRoles(['admin']), userController.getAllUsers);

// Get user by ID
router.get('/users/:userId', authenticateToken, authorizeRoles(['admin']), userController.getUserById);

// Update user by ID
router.put('/users/:userId', authenticateToken, authorizeRoles(['admin']), userController.updateUserById);

// Delete user by ID
router.delete('/users/:userId', authenticateToken, authorizeRoles(['admin']), userController.deleteUserById);

module.exports = router;
