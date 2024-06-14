import styled from 'styled-components';

const InformtiveMsj = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;

  p {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

function InfomativeMsj({ children }) {
  return (
    <InformtiveMsj>
      <p>{children}</p>
    </InformtiveMsj>
  );
}

export default InfomativeMsj;
