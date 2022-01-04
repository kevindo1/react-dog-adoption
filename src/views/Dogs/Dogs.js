import React from 'react';
import { useState, useEffect } from 'react';
import DogList from '../../components/DogList';
import { fetchDogs } from '../../services/dogs';
import './Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
