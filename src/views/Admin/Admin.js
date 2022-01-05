import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById } from '../../services/dogs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/DogForm';

export default function Admin() {
  const [dog, setDog] = useState('');
  // const [image, setImage] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, setBio] = useState('');
  // const [breed, setBreed] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <div>
        <DogForm dog={dog} />
      </div>
    </>
  );
}
