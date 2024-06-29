const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my Fitness app!');
});

const workoutsController = require("./controllers/workoutsController");
app.use("/workouts", workoutsController);

module.exports = app;