const Task = require('../../models/task');

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

exports.createTask = async (req, res) => {
  await handleOperation(Task, 'create', [req.body], req, res);
};

exports.getAllTasks = async (req, res) => {
  await handleOperation(Task, 'find', [], req, res);
};

exports.getTaskById = async (req, res) => {
  await handleOperation(Task, 'findById', [req.params.taskId], req, res);
};

exports.updateTaskById = async (req, res) => {
  await handleOperation(Task, 'findByIdAndUpdate', [req.params.taskId, req.body, { new: true }], req, res);
};

exports.deleteTaskById = async (req, res) => {
  await handleOperation(Task, 'findByIdAndDelete', [req.params.taskId], req, res);
};
