const { User, Thought } = require('../models');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get a single user by its _id and populate thoughts and friends data
  getUserById: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findById(userId)
        .populate('thoughts')
        .populate('friends', '_id username');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const { username, email } = req.body;

    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      const user = await User.create({ username, email });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a user by its _id
  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { username, email },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a user by its _id
  deleteUser: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findByIdAndDelete(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Remove user references from thoughts
      await Thought.updateMany(
        { username: user.username },
        { $pull: { reactions: { username: user.username } } }
      );

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
