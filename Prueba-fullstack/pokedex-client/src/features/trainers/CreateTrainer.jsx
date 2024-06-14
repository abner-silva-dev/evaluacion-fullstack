import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../iu/Button';

import { API_BASE_2 } from '../../config';
import { useTrainers } from '../../context/TrainersContext';

const RowStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.7fr;
  gap: 2rem;
  border: solid 2px var(--color-grey-200);
  padding: 2rem 4rem;

  p {
    font-size: 1.7rem;
    color: var(--color-grey-700);
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  select {
    height: 100%;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 2rem;
`;

function CreateTrainer() {
  const { setChange } = useTrainers();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('man');
  const [numberOfPokemons, setNumberOfPokemons] = useState('');

  function handleClear() {
    setName('');
    setAge('');
    setGender('man');
    setNumberOfPokemons('');
  }

  async function handleCreateTrainer(trainerObj) {
    console.log(trainerObj);
    try {
      const res = await fetch(`${API_BASE_2}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainerObj),
      });

      handleClear();
      setChange((chage) => !chage);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RowStyled onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="man">man</option>
          <option value="women">women</option>
        </select>
      </div>
      <div>
        <label htmlFor="NumberOfPokemons">number of pokemons</label>
        <input
          value={numberOfPokemons}
          onChange={(e) => setNumberOfPokemons(e.target.value)}
          required
        />
      </div>
      <ContainerButtons>
        <Button
          onClick={() => {
            handleCreateTrainer({ name, age, gender, numberOfPokemons });
          }}
        >
          Create trainer
        </Button>
      </ContainerButtons>
    </RowStyled>
  );
}

export default CreateTrainer;
