import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navegation = styled.nav`
  background: linear-gradient(
    to left,
    var(--color-brand-700),
    var(--color-green-700)
  );
  border-radius: 11px;
  padding: 2rem 4rem;
  box-shadow: var(--shadow-md);
`;

const Ul = styled.ul`
  display: flex;
  color: var(--color-grey-0);
  font-size: 2rem;
  gap: 2rem;
`;

function Header() {
  return (
    <Navegation>
      <Ul>
        <li>
          <Link to="/pokemons/">Pokemons</Link>
        </li>
        <li>
          <Link to="/trainers/">Trainers</Link>
        </li>
      </Ul>
    </Navegation>
  );
}

export default Header;
