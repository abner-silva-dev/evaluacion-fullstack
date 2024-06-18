import { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE } from '../config';

const PokemonContext = createContext();

function ProviderPokemon({ children }) {
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('1');
  const [limit, setLimit] = useState(pokemons.length || '1302');
  const [totalResultsPokemons, setTotalResultsPokemons] = useState(0);

  const apiQuerys = `${API_BASE}?search=${query}&limit=${limit}&page=${page}`;

  useEffect(() => {
    (async () => {
      setError('');
      setIsloading(true);
      try {
        const res = await fetch(apiQuerys);
        const pokemons = await res.json();

        if (pokemons.status === 'fail') throw new Error(pokemons.error);

        setTotalResultsPokemons(+pokemons?.data?.totalResults);
        setPokemons(pokemons?.data?.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [apiQuerys]);

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
        query,
        setQuery,
        apiQuerys,
        totalResultsPokemons,
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
