import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById, updateDog } from '../../services/dogs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/DogForm';

export default function Admin() {
  const [dog, setDog] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  // const updateDogState = (key, value) => {
  //   dog[key] = value;
  //   setDog({ ...dog });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault;
    await updateDog(dog);
  };

  return (
    <>
      <div>
        {/* <DogForm dog={dog} handleSubmit={handleSubmit} updateDogState={updateDogState} /> */}
      </div>
    </>
  );
}
