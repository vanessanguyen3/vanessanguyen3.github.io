//posted comments route
const withAuth = require('../../utils/auth')
const router = require('express').Router();
//require any models that were created example Favorites

//example of the favorite routes (localhost:3000/api/favorites)
router.get('/', withAuth,  async(req, res)=>{
    try{
        const favoriteData = await Favorites.findAll({
            include:[User]
        })

        const favorites = favoriteData.map((data) => data.get({plain: true}))

        res.render('profile', {favorites});

    }catch(err){
        res.status(500).json(err)
    }
})

//example to add new favorite 

router.post('/', withAuth, async(req, res)=>{
    const body = req.body;

    try{
        const newfav = await Favorites.create({...body, userId: req.session.userId})
        res.json(newfav);

    }catch(err){
        res.status(500).json(err)
    }
})


//example for history route to get all data (localhost:3000/api/history)

router.get('/', withAuth,  async(req, res)=>{
    try{
        const historyData = await Favorites.findAll({
            include:[User]
        })

        const history = historyData.map((data) => data.get({plain: true}))

        res.render('profile', {history});

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;