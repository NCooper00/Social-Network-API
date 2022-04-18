const router = require('express').Router();
const {
  getFriend,
  getSingleFriend,
  createFriend,
  deleteFriend,
} = require('../../controllers/friendController');

// /api/friends
router.route('/').get(getFriend).post(createFriend);

// /api/friends/:friendId
router.route('/:friendId').get(getSingleFriend);

// /api/friends/destroy/:friendId
router.route('/destroy/:friendId').delete(deleteFriend);

module.exports = router;