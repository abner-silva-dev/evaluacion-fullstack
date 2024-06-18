import styled from 'styled-components';
import { usePokemon } from '../../context/PokemonsContext';
import Button from '../../iu/Button';
import { useState } from 'react';
import { API_BASE } from '../../config';

const FilterContainer = styled.form`
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
  const { setIsloading, setPokemons, setError, setLimit, setQuery, setPage } =
    usePokemon();
  const [search, setSearch] = useState('');

  async function handleSearch() {
    setIsloading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}?&search=${search}`);
      const pokemons = await res.json();
      if (pokemons.status === 'fail') throw new Error(pokemons.error);
      setPokemons(pokemons?.data?.data);
      setQuery(search);
      setPage('1');
      setLimit(pokemons?.data?.data?.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <FilterContainer onSubmit={(e) => e.preventDefault()}>
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
