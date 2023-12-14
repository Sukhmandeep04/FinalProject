const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task', // Reference to the Task model
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
