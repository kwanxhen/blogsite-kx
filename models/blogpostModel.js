const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;