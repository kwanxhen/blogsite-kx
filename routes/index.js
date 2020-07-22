const router = require('express').Router();
const blogpostRoutes = require('./blogposts');

/////////API routes////////////
//first api endpoint at localhost3000/blogposts
router.use('/blogposts', blogpostRoutes);

module.exports = router;