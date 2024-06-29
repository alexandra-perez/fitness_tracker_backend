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
    res.status(404).json({ error: `Workout with id ${id} not found.` });
  }
});

router.post('/', (req, res) => {
  const currentWorkout = { id: workoutArray.length + 1, ...req.body }; // create new ID for the workout
  workoutArray.push(currentWorkout);
  res.status(201).send(currentWorkout);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const workoutIndex = workoutArray.findIndex((workout) => workout.id === +id);

  if (workoutIndex !== -1) {
    workoutArray.splice(workoutIndex, 1);
    res.redirect('/workouts');
  } else {
    res.status(404).send({ error: `Workout with id ${id} not found.` });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const workoutIndex = workoutArray.findIndex((workout) => workout.id === +id);

  if (workoutIndex !== -1) {
    workoutArray[workoutIndex] = req.body;
    res.redirect('/workouts');
  } else {
    res.status(404).send({ error: `Workout with id ${id} not found.` });
  }
});

module.exports = router;
