import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProviderPokemon } from './context/PokemonsContext.jsx';
import { ProviderTrainers } from './context/TrainersContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderTrainers>
      <ProviderPokemon>
        <App />
      </ProviderPokemon>
    </ProviderTrainers>
  </React.StrictMode>
);
