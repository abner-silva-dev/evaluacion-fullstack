import styled from 'styled-components';
import PokemonItem from './PokemonItem';
import Spinner from '../../iu/Spinner';
import ErrorMessage from './../../iu/ErrorMessage';

import { usePokemon } from '../../context/PokemonsContext';

const PokemonsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 4rem;

  @media (max-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function PokemonsList() {
  const { pokemons, isLoading, error } = usePokemon();

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  if (isLoading) return <Spinner />;

  return (
    <PokemonsStyles>
      {pokemons?.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </PokemonsStyles>
  );
}

export default PokemonsList;
