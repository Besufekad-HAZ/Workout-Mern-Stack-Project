const express = require("express");
const Workout = require("../models/Workout");
const {
  createWorkout,
  getWorkout,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// get all workouts
router.get("/", getAllWorkouts);

// get a single workout
router.get("/:id", getWorkout);

// create a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
