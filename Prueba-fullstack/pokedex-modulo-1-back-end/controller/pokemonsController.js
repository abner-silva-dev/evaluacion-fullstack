const axios = require('axios');

const apiFeatures = require('./../utils/apiFeatures');

exports.getAllPokemons = async (req, res) => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=1302'
    );
    const pokemons = response.data.results;

    const pokemonsModifier = apiFeatures(pokemons, req.query);

    res.status(200).json({
      state: 'success',
      data: {
        results: pokemonsModifier.length,
        data: pokemonsModifier,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(err.statusCode).json({
      status: err.status,
      error: err.message,
    });
  }
};

exports.getPokemon = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const pokemon = response.data;

    res.status(200).json({
      state: 'success',
      data: {
        pokemon,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};
