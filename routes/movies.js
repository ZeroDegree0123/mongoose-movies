var express = require('express');
var router = express.Router();

var moviesCtrl = require('../controllers/movies');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// All routes start with /movies


//Get/
router.get('/new', moviesCtrl.newMovie)

// POST /movies
router.post('/', moviesCtrl.create)

module.exports = router;
