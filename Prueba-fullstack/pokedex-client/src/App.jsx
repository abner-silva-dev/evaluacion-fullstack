import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './iu/AppLayout';
import Pokemons from './pages/Pokemons';
import Trainers from './pages/Trainers';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="pokemons" />} />
            <Route path="pokemons" element={<Pokemons />} />
            <Route path="trainers" element={<Trainers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
