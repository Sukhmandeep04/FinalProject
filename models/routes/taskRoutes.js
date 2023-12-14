const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

// Create task
router.post('/tasks', authenticateToken, authorizeRoles(['admin', 'user']), taskController.createTask);

// Get all tasks
router.get('/tasks', authenticateToken, authorizeRoles(['admin', 'user']), taskController.getAllTasks);

// Get task by ID
router.get('/tasks/:taskId', authenticateToken, authorizeRoles(['admin', 'user']), taskController.getTaskById);

// Update task by ID
router.put('/tasks/:taskId', authenticateToken, authorizeRoles(['admin', 'user']), taskController.updateTaskById);

// Delete task by ID
router.delete('/tasks/:taskId', authenticateToken, authorizeRoles(['admin', 'user']), taskController.deleteTaskById);

module.exports = router;
