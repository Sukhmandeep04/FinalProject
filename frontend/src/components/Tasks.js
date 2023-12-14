import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import axios from 'axios';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return [tasks, setTasks];
};

const sendToBackend = async (taskData) => {
  try {
    const response = await axios.post('http://your-backend-api/tasks', taskData);

    if (response.status === 201) {
      console.log('Task data sent to the backend successfully.');
    } else {
      console.error('Failed to send task data to the backend.');
    }
  } catch (error) {
    console.error('Error sending task data to the backend:', error);
  }
};

const Tasks = ({ userRole }) => {
  const [tasks, setTasks] = useFetchTasks();

  const handleTaskSubmit = async (newTask) => {
    // Add the new task to the tasks array
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Send the new task data to your backend for storage
    sendToBackend(newTask);
  };

  return (
    <div>
      <h2>Tasks Page</h2>
      {/* Display TaskForm only for users with the 'admin' role */}
      {userRole === 'admin' && <TaskForm onSubmit={handleTaskSubmit} />}

      {/* Display existing tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.name}</strong>: {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
