//gallery route (main page) includes "comments route"
const router = require('express').Router();
const sequelize = require('../config/config');
const { Artist, Comments, Post, User } = require('../models');

//Get all routes from home page
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('gallery', { posts });
    // res.render('newpost', { user_id: req.session.id });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});
module.exports = router;
