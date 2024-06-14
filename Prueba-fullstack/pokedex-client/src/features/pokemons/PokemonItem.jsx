import styled from 'styled-components';
import Button from '../../iu/Button';
import PdfLink from './PdfPokemon';

import { useState } from 'react';
import { API_BASE } from '../../config';

const PokemonItemStyle = styled.li`
  border: solid 2px var(--color-grey-100);
  border-bottom: solid 6px var(--color-brand-200);
  padding: 2rem 4rem;
  border-radius: 11px;
  box-shadow: var(--shadow-md);
  text-align: center;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: var(--color-brand-200);
  }
`;

const DetailsText = styled.p`
  font-weight: 600;
  color: var(--color-grey-500);
`;

const SubrayText = styled.p`
  position: relative;
  color: var(--color-grey-100);
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-block;
  padding: 0.7rem 0;
  width: 70%;
  z-index: 2;

  &::first-letter {
    text-transform: uppercase;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--color-brand-500);
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transform: skewX(20deg);
  }
`;

const ImagePokemon = styled.img`
  width: 50%;
`;

function PokemonItem({ pokemon }) {
  const [pokemonDatails, setPokemonDatails] = useState(null);

  async function handleDetails() {
    const res = await fetch(`${API_BASE}/${pokemon.name}`);
    const data = await res.json();

    const pokemonData = data?.data?.pokemon;

    setPokemonDatails(pokemonData);
  }

  return (
    <PokemonItemStyle onClick={handleDetails}>
      <SubrayText>{pokemon.name}</SubrayText>

      {pokemonDatails && (
        <>
          <ImagePokemon
            src={`${pokemonDatails?.sprites?.front_default}`}
            alt={`image of ${name} pokemon`}
          />

          <DetailsText> Height: {pokemonDatails?.height || 0}</DetailsText>

          <Button $variation="danger" $size="small">
            <PdfLink
              pokemon={{
                name: pokemon.name,
                img: pokemonDatails?.sprites?.front_default,
                height: pokemonDatails?.height,
              }}
            />
          </Button>
        </>
      )}
    </PokemonItemStyle>
  );
}

export default PokemonItem;
