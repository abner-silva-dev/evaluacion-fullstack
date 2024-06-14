const express = require('express');
const pokemonsController = require('../controller/pokemonsController');

const router = express.Router();

router.route('/').get(pokemonsController.getAllPokemons);
router.route('/:name').get(pokemonsController.getPokemon);

module.exports = router;
