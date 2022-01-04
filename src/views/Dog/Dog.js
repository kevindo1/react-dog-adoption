import React from 'react';
import { useState, useEffect } from 'react';
import DogDetails from '../../components/DogDetails';
import { fetchDogsById } from '../../services/dogs';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);
      setDog(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <DogDetails dog={dog} />
      </div>
    </>
  );
}
