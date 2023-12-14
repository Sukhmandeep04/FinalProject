const User = require('../../models/user');

const handleUserOperation = async (operation, action, req, res) => {
  try {
    const result = await User[operation](...action);
    if (!result) {
      res.status(404).json({ error: `User not found for ${operation}` });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ error: `Error ${action.length > 1 ? 'updating' : 'fetching'} user` });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  await handleUserOperation('create', [req.body], req, res);
};

// Get all users
exports.getAllUsers = async (req, res) => {
  await handleUserOperation('find', [], req, res);
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  await handleUserOperation('findById', [req.params.userId], req, res);
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  await handleUserOperation('findByIdAndUpdate', [req.params.userId, req.body, { new: true }], req, res);
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  await handleUserOperation('findByIdAndDelete', [req.params.userId], req, res);
};
