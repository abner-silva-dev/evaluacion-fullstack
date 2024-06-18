import styled from 'styled-components';
import { usePokemon } from '../../context/PokemonsContext';

const QueryStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

const FilterStyled = styled.input`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 11px;
  border: solid 2px var(--color-grey-300);
  box-shadow: var(--shadow-md);
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const ButtonArray = styled.button`
  padding: 1.5rem 1rem;
  border-radius: 11px;
  border: solid 2px var(--color-grey-300);
`;

function Query() {
  const { limit, setLimit, page, setPage, pokemons, totalResultsPokemons } =
    usePokemon();

  function handleClickRight() {
    if (
      +limit * +page - ((+limit * +page) % pokemons.length === 0) >=
      totalResultsPokemons
    )
      return;
    // if (+limit * +page >= totalResultsPokemons) return;
    setPage((page) => +page + 1);
  }
  function handleClickLeft() {
    if (page - 1 <= 0) return;
    setPage((page) => +page - 1);
  }

  return (
    <QueryStyled>
      <Group>
        <label htmlFor="limit">Limit</label>
        <FilterStyled
          type="number"
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </Group>
      <Group>
        <label htmlFor="page">page</label>
        <ButtonArray onClick={handleClickLeft}>&larr;</ButtonArray>

        <FilterStyled
          disabled={true}
          type="number"
          id="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <ButtonArray onClick={handleClickRight}>&rarr;</ButtonArray>
      </Group>
    </QueryStyled>
  );
}

export default Query;
