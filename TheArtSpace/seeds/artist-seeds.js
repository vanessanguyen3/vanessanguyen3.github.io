const Artist = require('../models/Artist');



const artistdata = [{
    title: 'Waterfall',
    author: 'Kyla Scott',
    genre: 'Abstract',
    price: 1000
}]
const seedArtist = () => Artist.bulkCreate(artistdata);

module.exports = seedArtist;