import { createContext, useContext, useEffect, useState } from 'react';

import { API_BASE_2 } from '../config';

const TrainersContext = createContext();

function ProviderTrainers({ children }) {
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [trainers, setTrainers] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    (async () => {
      setError('');
      setIsloading(true);
      try {
        const res = await fetch(`${API_BASE_2}`);
        const data = await res.json();

        setTrainers(data.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [change]);

  return (
    <TrainersContext.Provider
      value={{
        error,
        setError,
        isLoading,
        setIsloading,
        trainers,
        setTrainers,
        change,
        setChange,
      }}
    >
      {children}
    </TrainersContext.Provider>
  );
}

function useTrainers() {
  const context = useContext(TrainersContext);

  return { ...context };
}

export { ProviderTrainers, useTrainers };
