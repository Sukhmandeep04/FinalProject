const Project = require('../../models/project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ error: 'Error creating project' });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.json(project);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching project' });
  }
};

// Update a project by ID
exports.updateProjectById = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true });
    if (!updatedProject) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.json(updatedProject);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error updating project' });
  }
};

// Delete a project by ID
exports.deleteProjectById = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.projectId);
    if (!deletedProject) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.json(deletedProject);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error deleting project' });
  }
};
