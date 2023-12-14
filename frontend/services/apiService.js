import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API URL

const apiService = {
  // Fetch all tasks
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  // Create a new task
  createTask: async (newTask) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, newTask);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  // Fetch all projects
  getAllProjects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Create a new project
  createProject: async (newProject) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/projects`, newProject);
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  // Fetch all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};

export default apiService;
