const router = require("express").Router();
const workoutModel = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  workoutModel.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workoutModel.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Put
router.put("/api/workouts/:id", ({body, params}, res) => {

  workoutModel.findByIdAndUpdate(params.id, {
     $push: { exercises: body }}, {
        new: true, runValidators: true })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});


router.post("/api/workouts", ({ body }, res) => {

  workoutModel.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;