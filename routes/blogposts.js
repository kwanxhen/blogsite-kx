const router = require("express").Router();
const blogpostsController = require("../controllers/blogpostsController");

//read all blogposts and send back in JSON format
router.route("/")
  .get(blogpostsController.read);

router.route("/:id")
  .get(blogpostsController.readOne);

router.route("/add")
  .post(blogpostsController.create);

  module.exports = router;

  