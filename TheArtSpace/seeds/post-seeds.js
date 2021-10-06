const Post = require('../models/Post');



const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    image: "image",
    body: 'This is going to be the example of the post content',
    category: 'abstract'
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;