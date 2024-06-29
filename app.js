const express = require('express');

const app = express();

app.use(express.json());

const workoutsController = require('./controllers/workoutsController');
app.use('/workouts', workoutsController);

app.get('/', (req, res) => {
  res.send('Welcome to my Fitness app!');
});

module.exports = app;