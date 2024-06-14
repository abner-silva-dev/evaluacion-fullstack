import styled from 'styled-components';

const ErrorStyled = styled.div`
  text-align: center;

  p {
    background-color: var(--color-red-100);
    padding: 2rem 4rem;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 20px;
    color: var(--color-red-700);
    display: inline-block;
  }
`;

function ErrorMessage({ children }) {
  return (
    <ErrorStyled>
      <p>{children}</p>
    </ErrorStyled>
  );
}

export default ErrorMessage;
