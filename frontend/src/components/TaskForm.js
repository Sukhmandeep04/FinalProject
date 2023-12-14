import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!taskName || !taskDescription) {
      alert('Please fill in both task name and description.');
      return;
    }

    // Create a task object
    const newTask = {
      name: taskName,
      description: taskDescription,
      // Add more fields as needed
    };

    // Pass the new task to the parent component (e.g., Tasks.js) for submission
    onSubmit(newTask);

    // Clear the form after submission
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <br />
      <label>
        Task Description:
        <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
