import styled from 'styled-components';
import { useTrainers } from '../../context/TrainersContext';
import TrainersRow from './TrainersRow';
import HeaderTable from '../../iu/HeaderTable';
import InfomativeMsj from '../../iu/InfomativeMsj';

const BodyTable = styled.div`
  border: solid 2px var(--color-grey-200);
  border-radius: 0 0px 11px 11px;
`;

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
        {trainers.length === 0 && (
          <InfomativeMsj>No trainers, please create one</InfomativeMsj>
        )}

        {trainers.map((trainer) => (
          <TrainersRow key={trainer._id} trainer={trainer} />
        ))}
      </BodyTable>
    </div>
  );
}

export default TrainersTable;
