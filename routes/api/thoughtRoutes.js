// const router = require('express').Router();
// const {
//   getAllThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
// } = require('../../controllers/thoughtController');

// // /api/thoughts
// router.route('/').get(getAllThoughts).post(createThought);

// // /api/thoughts/:id
// router.route('/:id')
// .get(getSingleThought)
// .put(updateThought)
// .delete(deleteThought);

// module.exports = router;

const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/videos
router.route('/').get(getAllThoughts).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
  
module.exports = router;


