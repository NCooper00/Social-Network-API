const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

const { Thought } = require('../../models');
const { User } = require('../../models');


// /thoughts
router.route('/').get(getThought);

// /thoughts/create
// router.route('/create').post(createThought);
router.post('/', async (req, res) => {
  try {
      const newThought = await Thought.create(req.body);
      
      const updateUser = await User.findOneAndUpdate({ username: req.body.username }, { $push: { thoughts: newThought } });
      res.status(200).json(updateUser);

  } catch (err) {
      res.status(500).json(err); 
  }
});

// /thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

// /thoughts/destroy/:thoughtId
router.route('/destroy/:thoughtId').delete(deleteThought);



router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;