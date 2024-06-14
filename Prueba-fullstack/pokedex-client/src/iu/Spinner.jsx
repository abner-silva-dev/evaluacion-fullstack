import styled from 'styled-components';

const SpinnerContainer = styled.div`
  /* width: 100vw; */
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerStyled = styled.span`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  animation: roll 1s ease-in-out infinite alternate;

  &:after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid;
    border-color: var(--color-brand-700) transparent;
  }

  @keyframes roll {
    0% {
      transform: translateX(-150%) rotate(0deg);
    }
    100% {
      transform: translateX(150%) rotate(360deg);
    }
  }
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerStyled />
    </SpinnerContainer>
  );
}

export default Spinner;
