import styled from 'styled-components';
import { usePokemon } from '../../context/PokemonsContext';
import Button from '../../iu/Button';
import { useState } from 'react';

const API_BASE = 'http://localhost:3000/api/v1/pokemons';

const FilterContainer = styled.div`
  width: 40%;
  display: flex;
  gap: 1rem;
`;

const FilterStyled = styled.input`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 11px;
  border: solid 2px var(--color-grey-300);
  box-shadow: var(--shadow-md);
`;

function Filter() {
  const { setIsloading, setPokemons, setError } = usePokemon();
  const [search, setSearch] = useState('');

  async function handleSearch() {
    setIsloading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}?&search=${search}`);
      const pokemons = await res.json();

      console.log(pokemons);

      if (pokemons.status === 'fail') throw new Error(pokemons.error);

      setPokemons(pokemons?.data?.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <FilterContainer>
      <FilterStyled
        type="text"
        placeholder="Search pokemon"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Button onClick={handleSearch}>Search</Button>
    </FilterContainer>
  );
}

export default Filter;
