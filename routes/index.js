const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get(
    "/movies", (req, res, next) => {
      Movie.find()
        .populate("title")
        .populate("creator")
        .then((eventsFromDB) => {
          const preview = eventsFromDB.map((event) => event.date.toString());
          const day = preview.map((day) => day.slice(0, 15));
          const hour = preview.map((hour) => hour.slice(16, 21));
          let eventos = [];
          for (let i = 0; i < eventsFromDB.length; i++) {
            eventos.push({
              events: eventsFromDB[i],
              day: day[i],
              hour: hour[i],
            });
          }
          res.render("events/index", {
            eventList: eventos,
          });
        })
        .catch((err) => next(err));
    }
  );

module.exports = router;
