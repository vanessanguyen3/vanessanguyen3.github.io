const User = require('../models/User');

const userdata = [
{
   
    username: 'nellbell1',
    email: 'localhost',
    password: 'password123',
},

{
   
    username: 'nellbell1',
    email: 'localhost',
    password: 'password123',
}
]
//hooks = true for the bcrypt model to work
const seedUser = () => User.bulkCreate(userdata);


module.exports = seedUser;