const Trainer = require('../model/trainerModel');
const AppError = require('../utils/appError');

exports.getAllTrainers = async (req, res) => {
  try {
    const doc = await Trainer.find({});

    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.createOneTrainer = async (req, res, next) => {
  try {
    const newDoc = await Trainer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: newDoc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.updateTrainer = async (req, res, next) => {
  try {
    const doc = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) throw new AppError('No document found with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: err.status,
      error: err.message,
    });
    // res.status(err.statusCode).json({
    //   status: err.status,
    //   error: err.message,
    // });
  }
};

exports.deleteTrainer = async (req, res, next) => {
  try {
    const doc = await Trainer.findByIdAndDelete(req.params.id);

    if (!doc) throw new AppError('No document found with that ID', 404);

    res.status(204).json({
      status: 'success',
      data: 'null',
    });
  } catch (err) {
    res.status(400).json({
      status: err.status,
      error: err.message,
    });
  }
};
