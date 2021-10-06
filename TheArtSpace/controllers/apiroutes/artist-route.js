//Artist route and creating/deleting New artists
const router = require("express").Router();
const { Artist } = require("../../models/");
const withAuth = require("../../utils/auth");

router.artist =("/", (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Artist.create({ ...body, userId: req.session.userId })
    .then(newArtist => {
      res.json(newArtist);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Artist.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Artist.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
