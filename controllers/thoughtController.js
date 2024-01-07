// const { Thought, User } = require('../models');

// const thoughtController = {
//   // Get all thoughts
//   async getAllThoughts(req, res) {
//     try {
//       const thoughts = await Thought.find().populate('reactions');
//       res.json(thoughts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Get a single thought
//   async getSingleThought(req, res) {
//     try {
//       const thought = await Thought.findOne({ _id: req.params.thoughtId })
//         .populate('reactions');

//       if (!thought) {
//         return res.status(404).json({ message: 'No thought with that ID' });
//       }

//       res.json(thought);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Create a thought
//   async createThought(req, res) {
//     try {
//       const thought = await Thought.create(req.body);

//       // Add the thought ID to the associated user's thoughts array
//       await User.findOneAndUpdate(
//         { username: req.body.username },
//         { $addToSet: { thoughts: thought._id } },
//         { new: true }
//       );

//       res.json(thought);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Delete a thought
//   async deleteThought(req, res) {
//     try {
//       const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

//       if (!thought) {
//         res.status(404).json({ message: 'No thought with that ID' });
//       }

//       // Remove the thought ID from the associated user's thoughts array
//       await User.findOneAndUpdate(
//         { username: thought.username },
//         { $pull: { thoughts: thought._id } }
//       );

//       // Remove reactions associated with the thought
//       await Reaction.deleteMany({ _id: { $in: thought.reactions } });

//       res.json({ message: 'Thought and associated reactions deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Update a thought
//   async updateThought(req, res) {
//     try {
//       const thought = await Thought.findOneAndUpdate(
//         { _id: req.params.thoughtId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!thought) {
//         res.status(404).json({ message: 'No thought with this ID' });
//       }

//       res.json(thought);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };

// module.exports = thoughtController;

const { Thought, User } = require('../models');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new video
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thought: thought._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Thought created, but found no user with that ID',
        });
      }

      res.json('Created the Thought 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(Thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { thought: req.params.thoughtId },
        { $pull: { thought: req.params.thoughtId } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'thought created but no user with this id!' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
