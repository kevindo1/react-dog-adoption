import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <section>
      <h3>Dogs</h3>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <img src={`https://placedog.net/500?id=${dog.id}`}></img>
          <p>Name: {dog.name}</p>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
        </Link>
      ))}
    </section>
  );
}
