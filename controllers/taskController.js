const Task = require('../../models/task');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Get a specific task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching task' });
  }
};

// Update a task by ID
exports.updateTaskById = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(updatedTask);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

// Delete a task by ID
exports.deleteTaskById = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
    if (!deletedTask) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(deletedTask);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};
