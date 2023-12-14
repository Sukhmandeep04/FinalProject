const Project = require('../../models/project');

const handleOperation = async (model, operation, action, req, res) => {
  try {
    const result = await model[operation](...action);
    if (!result) {
      const notFoundError = `${model.modelName} not found for ${operation}`;
      return res.status(404).json({ error: notFoundError });
    }
    res.json(result);
  } catch (err) {
    const errorMessage = `Error ${action.length > 1 ? 'updating' : 'fetching'} ${model.modelName}`;
    res.status(500).json({ error: errorMessage });
  }
};

exports.createProject = async (req, res) => {
  await handleOperation(Project, 'create', [req.body], req, res);
};

exports.getAllProjects = async (req, res) => {
  await handleOperation(Project, 'find', [], req, res);
};

exports.getProjectById = async (req, res) => {
  const { projectId } = req.params;
  await handleOperation(Project, 'findById', [projectId], req, res);
};

exports.updateProjectById = async (req, res) => {
  const { projectId, body } = req.params;
  const action = [projectId, body, { new: true }];
  await handleOperation(Project, 'findByIdAndUpdate', action, req, res);
};

exports.deleteProjectById = async (req, res) => {
  const { projectId } = req.params;
  await handleOperation(Project, 'findByIdAndDelete', [projectId], req, res);
};
