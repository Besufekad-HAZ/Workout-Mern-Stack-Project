require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts',workoutRoutes);


// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});


