const usernames = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
];

  const thoughtsTexts = [
    'This is a random thought.',
    'Another random thought.',
    'Yet another random thought.',
    'Random thoughts are cool!',
    'Thinking about randomness.',
  ];
  
  const reactionsBodies = [
    'Interesting!',
    'I agree!',
    'Nice thought!',
    'Well said!',
    'Great perspective!',
  ];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//   // Gets a random username
  const getRandomUsername = () => 
  `${getRandomArrItem(usernames)}`;

  // Function to generate random thoughts that we can add to user object.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        description: getRandomArrItem(thoughtsTexts),
        responses: [...getRandomReactions(3)],
      });
    }
    return results;
  };

  // Function to generate random reactions that we can add to thought object.
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(reactionsBodies),
        username: getRandomUsername(),
      });
    }
    return results;
  };

  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions };
