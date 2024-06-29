const express = require('express');
const router = express.Router();
const workoutArray = require("../models/workout");

router.get("/", (req, res) => {
    res.status(200).send(workoutArray);
})

module.exports = router;