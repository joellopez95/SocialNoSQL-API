const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
updateUser,
deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId').get(getSingleUser);

module.exports = router;
