import styled from 'styled-components';
import { useTrainers } from '../../context/TrainersContext';
import Button from '../../iu/Button';
import TrainersRow from './TrainersRow';
import HeaderTable from '../../iu/HeaderTable';

const BodyTable = styled.div``;

function TrainersTable({ children }) {
  const { trainers } = useTrainers();

  return (
    <div>
      <HeaderTable>
        <p>Name</p>
        <p>Age</p>
        <p>Gender</p>
        <p>number of pokemons</p>
        <div></div>
      </HeaderTable>
      <BodyTable>
        {trainers.map((trainer) => (
          <TrainersRow key={trainer._id} trainer={trainer} />
        ))}
      </BodyTable>
    </div>
  );
}

export default TrainersTable;
