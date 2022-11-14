const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('movies/movies', movies);
    })
    .catch((err) => {
      console.log(err);
      res.render('/');
    });
});

module.exports = router;
