const Comments = require('../models/Comments');


const commentdata = [
  {
    comments_text: 'This art is amazing',
    user_id: 6,
    post_id: 1
  },
]

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;