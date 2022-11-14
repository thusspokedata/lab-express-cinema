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

router.get('/movie/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const info = await Movie.findById(id);
    res.render('movies/movie-details', info);
  } catch (err) {
    console.log(err);
    res.redirect('/movies');
  }
});

// router.get('/movie/:id', (req, res) => {
//   const id = req.params.id;
//   Movie.findById(id)
//     .then((data) => {
//       res.render('movies/movie-details', data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.redirect('/movies');
//     });
// });

module.exports = router;
