const Blogpost = require("../models/blogpostModel");

//CRUD
module.exports = {
  create: function (req, res) {
    Blogpost.create(req.body)
      .then((newBlogpost) => res.json(newBlogpost))
      .catch((err) => res.status(422).json(err));
  },
  readOne: function (req, res) {
    //req.params gives you the blogpost id here
    Blogpost.findById(req.params);
  },
  read: function (req, res) {
    Blogpost.find()
      .then((allblogposts) => res.json(allblogposts))
      .catch((err) => res.status(422).json(err));
  },
};