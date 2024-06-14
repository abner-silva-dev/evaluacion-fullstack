import styled from 'styled-components';

const BaseInput = styled.input`
  border: 1px solid var(--color-grey-300);
  box-shadow: inset var(--shadow-sm);
  border-radius: 6px;
  padding: 1rem 2rem;
`;

const Input = styled(BaseInput).attrs({ as: 'input' })``;

const Select = styled(BaseInput).attrs({ as: 'select' })``;

export { Input, Select };
