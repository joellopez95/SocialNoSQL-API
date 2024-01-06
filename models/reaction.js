// Reaction.js

const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  thoughtId: { type: Schema.Types.ObjectId, ref: 'Thought', required: true },
  reactionType: { type: String, required: true },
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
