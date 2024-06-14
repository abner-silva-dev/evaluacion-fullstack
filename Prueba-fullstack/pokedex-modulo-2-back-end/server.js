const mongoose = require('mongoose');
const app = require('./app');
const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/pokemons');

app.listen(port, () => console.log(`Server listen in port ${port}`));
