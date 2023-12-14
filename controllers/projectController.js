const Project = require('../../models/project');

const handleOperation = async (model, operation, action, req, res) => {
  try {
    const result = await model[operation](...action);
    if (!result) {
      res.status(404).json({ error: `${model.modelName} not found for ${operation}` });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ error: `Error ${action.length > 1 ? 'updating' : 'fetching'} ${model.modelName}` });
  }
};

exports.createProject = async (req, res) => {
  await handleOperation(Project, 'create', [req.body], req, res);
};

exports.getAllProjects = async (req, res) => {
  await handleOperation(Project, 'find', [], req, res);
};

exports.getProjectById = async (req, res) => {
  await handleOperation(Project, 'findById', [req.params.projectId], req, res);
};

exports.updateProjectById = async (req, res) => {
  await handleOperation(Project, 'findByIdAndUpdate', [req.params.projectId, req.body, { new: true }], req, res);
};

exports.deleteProjectById = async (req, res) => {
  await handleOperation(Project, 'findByIdAndDelete', [req.params.projectId], req, res);
};
