const express = require('express');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({
        message: 'Get all workouts!!'
    });
})



module.exports = router;
