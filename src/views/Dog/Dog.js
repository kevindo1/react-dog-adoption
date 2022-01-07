import React from 'react';
import { useState, useEffect } from 'react';
import DogDetails from '../../components/DogDetails';
import { fetchDogsById, deleteDog } from '../../services/dogs';
import './Dog.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <h3>Loading</h3>;
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(dog.id);
    window.location.replace('/dogs');
  };

  return (
    <>
      <div>
        <DogDetails dog={dog} handleDelete={handleDelete} />
      </div>
    </>
  );
}
