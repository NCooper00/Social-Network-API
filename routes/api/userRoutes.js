const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  deleteUserThoughts,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /users
router.route('/').get(getUser).post(createUser);

// /users/:userId
router.route('/:userId').get(getSingleUser);

// /users/update/:userId
router.route('/update/:userId').put(updateUser);

// /destroy/:userId
router.route('/destroy/:userId').delete(deleteUser);

// /users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').put(addFriend);

// /users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;