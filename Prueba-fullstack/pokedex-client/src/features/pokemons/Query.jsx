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

function Query() {
  const { limit, setLimit, page, setPage } = usePokemon();

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
        <FilterStyled
          type="number"
          id="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </Group>
    </QueryStyled>
  );
}

export default Query;
