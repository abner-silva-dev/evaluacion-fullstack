import Filter from './../features/pokemons/Filter';
import Query from './../features/pokemons/Query';
import styled from 'styled-components';
import PokemonsList from '../features/pokemons/PokemonsList';

const OptionsPokemons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

function Pokemons() {
  return (
    <>
      <OptionsPokemons>
        <Filter />
        <Query />
      </OptionsPokemons>
      <PokemonsList />
    </>
  );
}

export default Pokemons;
