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

// create a new workout
router.post('/', (req, res) => {
    res.json({
        message: '(POST) Create a new workout!!'
    });
});

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({
        message: 'Delete a workout!!'
    });
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({
        message: 'Update a workout!!'
    });
})


module.exports = router;
