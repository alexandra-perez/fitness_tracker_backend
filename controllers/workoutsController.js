const express = require('express');
const router = express.Router();
const workoutArray = require('../models/workout');

// Get all workouts
router.get('/', (req, res) => {
  res.status(200).send(workoutArray);
});

// Get a workout
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const workoutIndex = workoutArray.findIndex(
    (workout) => workout.id === Number(id)
  );
  if (workoutIndex !== -1) {
    res.status(200).send(workoutArray[workoutIndex]);
  } else {
      res.status(404).json({error: `Workout with id ${id} not found.`})
  }
});

module.exports = router;