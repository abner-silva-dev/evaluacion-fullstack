import styled from 'styled-components';
import Button from '../../iu/Button';
import { useState } from 'react';

import { API_BASE_2 } from '../../config';
import { useTrainers } from '../../context/TrainersContext';

const RowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 0.5fr;
  gap: 1rem;
  border: solid 2px var(--color-grey-200);
  padding: 2rem 4rem;

  p {
    font-size: 1.7rem;
    color: var(--color-grey-700);
    font-weight: 500;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 2rem;
`;

function TrainersRow({ trainer }) {
  const { setChange } = useTrainers();
  const [name, setName] = useState(trainer.name);
  const [age, setAge] = useState(trainer.age);
  const [gender, setGender] = useState(trainer.gender);
  const [numberOfPokemons, setNumberOfPokemons] = useState(
    trainer.numberOfPokemons
  );

  async function handleDelete(id) {
    try {
      const res = await fetch(`${API_BASE_2}/${id}`, {
        method: 'DELETE',
      });

      setChange((change) => !change);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdate(trainerObj) {
    try {
      const res = await fetch(`${API_BASE_2}/${trainer._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainerObj),
      });

      const data = await res.json();
      setChange((chage) => !chage);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RowStyled>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="man">man</option>
        <option value="women">women</option>
      </select>
      <input
        value={numberOfPokemons}
        onChange={(e) => setNumberOfPokemons(e.target.value)}
      />
      <ContainerButtons>
        <Button
          $variation="secondary"
          onClick={() => handleUpdate({ name, age, gender, numberOfPokemons })}
        >
          Update
        </Button>
        <Button $variation="danger" onClick={() => handleDelete(trainer._id)}>
          Delete
        </Button>
      </ContainerButtons>
    </RowStyled>
  );
}

export default TrainersRow;
