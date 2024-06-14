const express = require('express');
const app = express();
const cors = require('cors');

const pokemonsRouter = require('./routes/pokemonsRoutes.js');

app.use(cors('*'));

app.get('/', function (req, res) {
  res.send(
    `Welcome to API pokedex for start doing request, please use the route ${req.get(
      'host'
    )}/api/v1/`
  );
});

app.use('/api/v1/pokemons', pokemonsRouter);

module.exports = app;
