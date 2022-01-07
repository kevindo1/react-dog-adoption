import React from 'react';
import { useState } from 'react';
import DogForm from '../../components/DogForm';
import { createDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({});

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(dog);
    if (createDog) {
      alert('Dog has been added!');
    } else {
      alert('Error, request failed');
    }
    window.location.replace('/dogs');
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogState={updateDogState} />
    </div>
  );
}
