const db = require("../models");

module.exports = function(app) {

    //get function to retrieve data for workout
    app.get("/api/workout", (req, res) => {
        db.workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

    // retrieves data for the range
    app.get("/api/workout/range", ({}, res) => {
        db.workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // posts to new workouts
    app.post("/api/workout/", (req, res) => {
        db.workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // updates the workouts with mongodb id value
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });

};