const router = require("express").Router();
const blogpostsController = require("../controllers/blogpostsController");

router.route("/")
  .get(function (req, res) {
    res.send("display all blogposts");
  })
  .post(blogpostsController.create);

router.route("/:id")
  .get(function (req, res) {
    res.send("display a specific blogposts");
  });

  module.exports = router;



