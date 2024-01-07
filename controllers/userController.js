// const { User, Thought } = require('../models');

// const userController = {
//   // Get all users
//   async getAllUsers(req, res) {
//     try {
//       const users = await User.find();

//       const userObj = {
//         users,
//         userCount: await headCount(),
//       };

//       res.json(userObj);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Get a single user
//   async getSingleUser(req, res) {
//     try {
//       const user = await User.findOne({ _id: req.params.userId })
//         .select('-__v');

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       res.json({
//         user,
//         thoughtCount: await thoughtCount(req.params.userId),
//         reactionCount: await reactionCount(req.params.userId),
//       });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Create a new user
//   async createUser(req, res) {
//     try {
//       const user = await User.create(req.body);
//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Delete a user and remove their thoughts
//   async deleteUser(req, res) {
//     try {
//       const user = await User.findOneAndRemove({ _id: req.params.userId });

//       if (!user) {
//         return res.status(404).json({ message: 'No such user exists' });
//       }

//       await Thought.deleteMany({ username: user.username });

//       res.json({ message: 'User and thoughts successfully deleted' });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },
//   // Update a user
//   async updateUser(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!user) {
//         res.status(404).json({ message: 'No user with this ID' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };

// // Function to get the number of users overall
// const headCount = async () => {
//   const numberOfUsers = await User.countDocuments();
//   return numberOfUsers;
// };

// // Function to get the number of thoughts for a user
// const thoughtCount = async (userId) => {
//   const numberOfThoughts = await Thought.countDocuments({ username: userId });
//   return numberOfThoughts;
// };

// // Function to get the number of reactions for a user
// const reactionCount = async (userId) => {
//   const userThoughts = await Thought.find({ username: userId });
//   let numberOfReactions = 0;

//   userThoughts.forEach((thought) => {
//     numberOfReactions += thought.reactions.length;
//   });

//   return numberOfReactions;
// };

// module.exports = userController;
const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
