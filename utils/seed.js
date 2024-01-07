const connection = require('../config/connection'); 
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected');

  // Delete the collections if they exist
  let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (usersCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Create empty array to hold the users
  const users = [];

  // Loop 5 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    // Get some random thoughts and reactions using helper functions
    const thoughts = getRandomThoughts(5);
    const reactions = getRandomReactions(5);

    const username = getRandomUsername();
    const email = `${username.toLowerCase()}@example.com`;

    users.push({
      username,
      email,
      thoughts,
      reactions,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  // Declare Thought and insert thoughts into the collection
  const thoughts = getRandomThoughts(10); 
  const thoughtData = await Thought.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  console.table(thoughts);
  console.info('Thought seeding complete! 🌱');
  process.exit(0);
});
