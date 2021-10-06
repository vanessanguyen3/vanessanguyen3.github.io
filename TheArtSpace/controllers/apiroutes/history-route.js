//posted comments route
const withAuth = require('../../utils/auth')



//example for history route to get all data (localhost:3000/api/history)

router.get('/', withAuth, async(req, res)=>{
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