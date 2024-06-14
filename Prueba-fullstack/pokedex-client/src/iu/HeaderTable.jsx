import styled from 'styled-components';

const HeaderTable = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: var(--color-grey-100);
  border-radius: 11px 11px 0 0;
  border: solid 2px var(--color-grey-200);
  padding: 2rem 4rem;

  p {
    font-size: 1.7rem;
    color: var(--color-grey-700);
    font-weight: 600;
  }
`;

export default HeaderTable;
