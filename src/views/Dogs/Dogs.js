import React from 'react';
import { useState, useEffect } from 'react';
import DogList from '../../components/DogList';
import { fetchDogs } from '../../services/dogs';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
