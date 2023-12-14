const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const User = require('./models/user');
const Task = require('./models/task');
const Project = require('./models/project');

const userController = require('./backend/controllers/userController');
const taskController = require('./backend/controllers/taskController');
const projectController = require('./backend/controllers/projectController');

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');

const { authenticateToken, authorizeRoles } = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/task_management_system', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

const UserModel = mongoose.model('User', userSchema);

const sampleUser = {
  username: 'admin',
  password: 'adminpassword',
  role: 'admin',
};

UserModel.create(sampleUser)
  .then((createdUser) => {
    console.log('Sample user created successfully');

    const sampleTask = {
      name: 'Sample Task',
      description: 'This is a sample task',
      assignedUser: createdUser._id,
      status: 'In Progress',
    };

    const sampleProject = {
      name: 'Sample Project',
      description: 'This is a sample project',
      tasks: [],
    };

    return Task.create(sampleTask);
  })
  .then((createdTask) => {
    console.log('Sample task created successfully');

    sampleProject.tasks.push(createdTask._id);

    return Project.create(sampleProject);
  })
  .then(() => {
    console.log('Sample project created successfully');
  })
  .catch((err) => {
    console.error('Error creating sample data:', err);
  });

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === sampleUser.username && password === sampleUser.password) {
    const token = jwt.sign({ username, role: sampleUser.role }, 'sukhman', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.use(authenticateToken);

app.get('/admin-only-route', authorizeRoles(['admin']), (req, res) => {
  res.json({ message: 'Admin-only route accessed successfully.' });
});

// Define routes using controllers
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);
app.get('/users/:userId', userController.getUserById);
app.put('/users/:userId', userController.updateUserById);
app.delete('/users/:userId', userController.deleteUserById);

app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.get('/tasks/:taskId', taskController.getTaskById);
app.put('/tasks/:taskId', taskController.updateTaskById);
app.delete('/tasks/:taskId', taskController.deleteTaskById);

app.post('/projects', projectController.createProject);
app.get('/projects', projectController.getAllProjects);
app.get('/projects/:projectId', projectController.getProjectById);
app.put('/projects/:projectId', projectController.updateProjectById);
app.delete('/projects/:projectId', projectController.deleteProjectById);

app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);

app.get('/tasks', (req, res) => {
  res.json({ message: 'Get tasks endpoint' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
