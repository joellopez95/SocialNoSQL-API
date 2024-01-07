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
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () => getRandomArrItem(usernames);
  
  // Gets a random thought text
  const getRandomThoughtText = () => getRandomArrItem(thoughtsTexts);
  
  // Gets a random reaction body
  const getRandomReactionBody = () => getRandomArrItem(reactionsBodies);
  
  // Function to generate random thoughts that we can add to user object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomThoughtText(),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Function to generate random reactions that we can add to thought object.
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomReactionBody(),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions };
  