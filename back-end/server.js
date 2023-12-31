require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

// express app
const app = express();

// enable cors
app.use(cors(corsOptions));

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to the database");
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
