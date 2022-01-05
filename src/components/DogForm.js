import React from 'react';

export default function DogForm(dog) {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={dog.name} />
      </label>
    </form>
  );
}
