const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  assignedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  status: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
