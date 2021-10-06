//posted comments route
const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  Comments.create({ ...req.body, userId: req.session.userId })
    .then(newComments => {
      res.json(newComments);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
