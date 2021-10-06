//consolidated api routes only from api routes AND add part of the 
const router = require('express').Router();

const userRoute = require('./user-auth');
//const postRoute = require('./post-route');
const commentRoute = require('./comments-route');
const artistRoute = require('./artist-route');
const favoritesRoute = require('./favorites-route');

router.use('/user', userRoute);
//router.use('/post', postRoute);
router.use('/comments', commentRoute);
router.use('/artist', artistRoute);
router.use('/favorites', favoritesRoute);

module.exports = router;