const express = require('express');
const router = express.Router();

const trainersController = require('./../controller/trainersController');

router
  .route('/')
  .get(trainersController.getAllTrainers)
  .post(trainersController.createOneTrainer);

router
  .route('/:id')
  .patch(trainersController.updateTrainer)
  .delete(trainersController.deleteTrainer);

module.exports = router;
