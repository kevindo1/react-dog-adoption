import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <section>
      <h3>Dogs</h3>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <img src={dog.image}></img>
          </Link>
          <p>Name: {dog.name}</p>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
        </div>
      ))}
    </section>
  );
}
