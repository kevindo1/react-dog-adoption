import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <section>
      <h3>Dogs</h3>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          {dog.name}
        </Link>
      ))}
    </section>
  );
}
