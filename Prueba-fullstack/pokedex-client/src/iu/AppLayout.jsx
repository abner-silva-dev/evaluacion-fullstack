import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const AppLayoutStyled = styled.div`
  padding: 2rem 4rem 10rem 4rem;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

function AppLayout() {
  return (
    <AppLayoutStyled>
      <Header />
      <Outlet />
    </AppLayoutStyled>
  );
}

export default AppLayout;
