import React from 'react';
import { Link } from 'react-router-dom';

export default function DogDetails({ dog, handleDelete }) {
  return (
    <section>
      <div key={dog.id}>
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <img src={dog.image}></img>
        </Link>
        <p>Name: {dog.name}</p>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
        <p>{dog.bio}</p>
        <Link key={dog.id} to={`/dogs/${dog.id}/edit`}>
          Edit
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}
