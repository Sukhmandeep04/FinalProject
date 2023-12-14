const Project = require('../../models/project');

const handleProjectOperation = async (operation, action, req, res) => {
  try {
    const result = await Project[operation](...action);
    if (!result) {
      res.status(404).json({ error: `Project not found for ${operation}` });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ error: `Error ${action.length > 1 ? 'updating' : 'fetching'} project` });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  await handleProjectOperation('create', [req.body], req, res);
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  await handleProjectOperation('find', [], req, res);
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
  await handleProjectOperation('findById', [req.params.projectId], req, res);
};

// Update a project by ID
exports.updateProjectById = async (req, res) => {
  await handleProjectOperation('findByIdAndUpdate', [req.params.projectId, req.body, { new: true }], req, res);
};

// Delete a project by ID
exports.deleteProjectById = async (req, res) => {
  await handleProjectOperation('findByIdAndDelete', [req.params.projectId], req, res);
};
