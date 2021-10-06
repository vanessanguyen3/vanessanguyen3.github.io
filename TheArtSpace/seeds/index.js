const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComments = require('./comments-seeds');
const seedArtist = require('./artist-seeds');

const sequelize = require('../config/config.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');
    
    await seedArtist();
    console.log('--------------');

    await seedPost();
    console.log('--------------');
  
    await seedComments();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();