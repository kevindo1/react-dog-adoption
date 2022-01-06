import React from 'react';

export default function DogForm({ handleSubmit, updateDogState, name, age, image, breed, bio }) {
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              updateDogState('name', e.target.value);
            }}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => {
              updateDogState('age', e.target.value);
            }}
          />
        </label>
        <label>
          Image url:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              updateDogState('image', e.target.value);
            }}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(e) => {
              updateDogState('breed', e.target.value);
            }}
          />
        </label>
        <label>
          Bio:
          <input
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => {
              updateDogState('bio', e.target.value);
            }}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
