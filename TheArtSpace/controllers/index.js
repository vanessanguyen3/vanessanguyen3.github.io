//Combines all the page routes to later connect to Public JS and then to Handlebars.
const router = require('express').Router();

const apiRoutes = require('./apiroutes');
const userRoutes = require('./apiroutes/user-auth');
//then list out each route PER folder of API routes
const homeRoutes = require('./home-routes.js');
const artistpageRoute = require('./artistpage-route');
//const userprofileRoute = require('./user-profile-routes.js');

router.use('/', homeRoutes);
router.use('/api/users', userRoutes)
    //router.use('/artistpage', artistpageRoutes);
    //router.use('/api', apiRoutes);
router.use('/api', apiRoutes);

    //router.use('/user', userprofileRoutes);

module.exports = router;
