const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');
const auth = require('../middleware/auth');

const Activity = require('../model/Activity');
const User = require('../model/User');
// const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/posts
// @desc     Create a post
// @access   Private

router.post(
    '/',
    auth,
    check("name", "A person is required"),
    check("time", "Time is required"),
    check('slides', 'Activity is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        try {
            // const user = await User.findById(req.user.id).select('-password');
            // const slides = await SlideSchema.findById()
            const newActivity = new Activity({
                slides: req.body.slides,
                who: req.body.name,
                when: req.body.time
            });

            const activity = await newActivity.save();

            res.json(activity);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
// router.get('/', auth, async (req, res) => {
//     try {
//         const activities = await Activity.find().sort({
//             date: -1
//         });
//         res.json(activities);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
// router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);

//         if (!activity) {
//             return res.status(404).json({
//                 msg: 'Activity not found'
//             });
//         }

//         res.json(activity);
//     } catch (err) {
//         console.error(err.message);

//         res.status(500).send('Server Error');
//     }
// });

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
// router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);

//         if (!activity) {
//             return res.status(404).json({
//                 msg: 'Activity not found'
//             });
//         }

//         // Check user
//         if (activity.who.toString() !== req.user.id) {
//             return res.status(401).json({
//                 msg: 'User not authorized'
//             });
//         }

//         await activity.remove();

//         res.json({
//             msg: 'Activity removed'
//         });
//     } catch (err) {
//         console.error(err.message);

//         res.status(500).send('Server Error');
//     }
// });

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
// router.put('/like/:id', auth, checkObjectId('id'), async (req, res) => {
//     try {
//         const activity = await Activity.findById(req.params.id);

//         // Check if the post has already been liked
//         if (activity.likes.some((like) => like.user.toString() === req.user.id)) {
//             return res.status(400).json({
//                 msg: 'Activity already liked'
//             });
//         }

//         activity.likes.unshift({
//             user: req.user.id
//         });

//         await activity.save();

//         return res.json(activity.likes);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
// router.put('/unlike/:id', auth, checkObjectId('id'), async (req, res) => {
//     try {
//         const post = await Activity.findById(req.params.id);

//         // Check if the post has not yet been liked
//         if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
//             return res.status(400).json({
//                 msg: 'Activity has not yet been liked'
//             });
//         }

//         // remove the like
//         post.likes = post.likes.filter(
//             ({
//                 user
//             }) => user.toString() !== req.user.id
//         );

//         await post.save();

//         return res.json(post.likes);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
// router.post(
//     '/comment/:id',
//     auth,
//     checkObjectId('id'),
//     check('text', 'Text is required').notEmpty(),
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         try {
//             const user = await User.findById(req.user.id).select('-password');
//             const post = await Activity.findById(req.params.id);

//             const newComment = {
//                 text: req.body.text,
//                 name: user.name,
//                 avatar: user.avatar,
//                 user: req.user.id
//             };

//             post.comments.unshift(newComment);

//             await post.save();

//             res.json(post.comments);
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         }
//     }
// );

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
// router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
//     try {
//         const post = await Activity.findById(req.params.id);

//         // Pull out comment
//         const comment = post.comments.find(
//             (comment) => comment.id === req.params.comment_id
//         );
//         // Make sure comment exists
//         if (!comment) {
//             return res.status(404).json({
//                 msg: 'Comment does not exist'
//             });
//         }
//         // Check user
//         if (comment.user.toString() !== req.user.id) {
//             return res.status(401).json({
//                 msg: 'User not authorized'
//             });
//         }

//         post.comments = post.comments.filter(
//             ({
//                 id
//             }) => id !== req.params.comment_id
//         );

//         await post.save();

//         return res.json(post.comments);
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).send('Server Error');
//     }
// });

module.exports = router;