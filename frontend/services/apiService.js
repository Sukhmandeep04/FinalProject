import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; 

const makeApiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axios[method](`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error ${method === 'get' ? 'fetching' : 'creating'} ${endpoint}:`, error);
    throw error;
  }
};

const apiService = {
  getAllTasks: async () => makeApiRequest('get', 'tasks'),

  createTask: async (newTask) => makeApiRequest('post', 'tasks', newTask),

  getAllProjects: async () => makeApiRequest('get', 'projects'),

  createProject: async (newProject) => makeApiRequest('post', 'projects', newProject),

  getAllUsers: async () => makeApiRequest('get', 'users'),
};

export default apiService;
