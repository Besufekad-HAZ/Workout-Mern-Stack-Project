const express = require('express');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({
        message: 'Get all workouts!!'
    });
})

// get a single workout
router.get('/:id', (req, res) => {
    const workoutId = req.params.id;
    // Logic to fetch the workout with the given id from the database
    // ...
    res.json({
        workoutId: workoutId,
        message: `Get workout with id ${workoutId}`
    });
});

module.exports = router;
