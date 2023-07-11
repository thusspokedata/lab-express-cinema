const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movies/movies', movies);
  } catch (err) {
    console.log(err);
    res.render('/');
  }
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

////////////////////////////////////////////////////
/////////////////// PROMISES ///////////////////////
////////////////////////////////////////////////////

// router.get('/movies', (req, res) => {
//   Movie.find()
//     .then((movies) => {
//       console.log(movies);
//       res.render('movies/movies', movies);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render('/');
//     });
// });

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

// En el primer fragmento de código, se utiliza la sintaxis async/await para manejar la asincronía. 
// La palabra clave async hace que la función devuelva una promesa, 
// y await se utiliza para esperar a que esa promesa se resuelva.

// El segundo fragmento de código utiliza promesas directamente con los métodos .then() y .catch(). 
// El método .then() se utiliza para especificar lo que sucede cuando la promesa se resuelve, 
// y .catch() se utiliza para manejar cualquier error que ocurra.

module.exports = router;
