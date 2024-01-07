const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/reactions/:thoughtId
router.route('/:thoughtId').post(createReaction);

// /api/reactions/:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
