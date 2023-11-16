const express = require("express");
const Workout = require("../models/Workout");
const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({
    message: "Get all workouts!!",
  });
});

// get a single workout
router.get("/:id", (req, res) => {
  const workoutId = req.params.id;
  // Logic to fetch the workout with the given id from the database
  res.json({
    workoutId: workoutId,
    message: `Get workout with id ${workoutId}`,
  });
});

// create a new workout
router.post("/", async (req, res) => {
  // Logic to create a new workout in the database
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a workout
router.delete("/:id", (req, res) => {
  const workoutId = req.params.id;
  res.json({
    workoutId: workoutId,
    message: `Delete a workout with id ${workoutId}`,
  });
});

// update a workout
router.patch("/:id", (req, res) => {
  const workoutId = req.params.id;
  res.json({
    workoutId: workoutId,
    message: `Update a workout with id ${workoutId}`,
  });
});

module.exports = router;
