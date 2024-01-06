// Thought.js

const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
