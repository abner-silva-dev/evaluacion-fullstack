import { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE } from '../config';

const PokemonContext = createContext();

function ProviderPokemon({ children }) {
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [limit, setLimit] = useState('');
  const [page, setPage] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      setError('');
      setIsloading(true);
      try {
        const API_QUERYS = `${API_BASE}?${
          limit !== '' ? `&limit=${limit}` : ''
        }${page !== '' ? `&page=${page}` : ''}`;

        const res = await fetch(API_QUERYS);
        const pokemons = await res.json();

        if (pokemons.status === 'fail') throw new Error(pokemons.error);

        setPokemons(pokemons?.data?.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [limit, page]);

  return (
    <PokemonContext.Provider
      value={{
        error,
        setError,
        pokemons,
        isLoading,
        setIsloading,
        setPokemons,
        limit,
        page,
        setLimit,
        setPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return { ...context };
}

export { ProviderPokemon, usePokemon };
