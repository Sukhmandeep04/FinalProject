const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

// Create project
router.post('/projects', authenticateToken, authorizeRoles(['admin']), projectController.createProject);

// Get all projects
router.get('/projects', authenticateToken, authorizeRoles(['admin']), projectController.getAllProjects);

// Get project by ID
router.get('/projects/:projectId', authenticateToken, authorizeRoles(['admin']), projectController.getProjectById);

// Update project by ID
router.put('/projects/:projectId', authenticateToken, authorizeRoles(['admin']), projectController.updateProjectById);

// Delete project by ID
router.delete('/projects/:projectId', authenticateToken, authorizeRoles(['admin']), projectController.deleteProjectById);

module.exports = router;
