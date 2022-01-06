import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById, updateDog } from '../../services/dogs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/DogForm';

export default function Edit() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id, loading]);

  if (loading) {
    return <h3>loading</h3>;
  }

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(dog);
  };

  return (
    <>
      <div>
        <DogForm {...dog} handleSubmit={handleSubmit} updateDogState={updateDogState} />
      </div>
    </>
  );
}
