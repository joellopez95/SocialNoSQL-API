// Friendship.js

const { Schema, model } = require('mongoose');

const friendshipSchema = new Schema({
  user1: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  user2: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted'], default: 'pending' },
});

const Friendship = model('Friendship', friendshipSchema);

module.exports = Friendship;
