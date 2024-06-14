const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainerSchema = new Schema({
  name: { type: String, required: [true, 'A trainer must be a name'] },
  age: { type: Number, required: [true, 'A trainer must be a age'] },
  gender: {
    type: String,
    enum: ['man', 'women'],
    required: [true, 'A trainer must be a gender'],
  },
  numberOfPokemons: {
    type: Number,
    required: [true, 'A trainer must be a number of pokemons'],
  },
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;
