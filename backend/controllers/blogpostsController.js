const Blogpost = require('../models/blogpostModel');

//CRUD
module.exports = {
  create: function(req, res) {
		Blogpost.create(req.body)
			.then(newBlogpost => res.json(newBlogpost))
			.catch(err => res.status(422).json(err));
	}
}


// Tank.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });