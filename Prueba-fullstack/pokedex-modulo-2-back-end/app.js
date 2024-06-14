const express = require('express');
const app = express();
const cors = require('cors');

const trainersRouter = require('./routes/trainersRoutes.js');

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.get('/', function (req, res) {
  res.send(
    `Welcome to API pokedex for start doing request, please use the route ${req.get(
      'host'
    )}/api/v1/`
  );
});

app.use('/api/v1/trainers', trainersRouter);

module.exports = app;
