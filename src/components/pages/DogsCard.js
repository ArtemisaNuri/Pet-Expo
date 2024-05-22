import React from 'react';

const DogsCard = ({ dog, onClick }) => {
  return (
    <div className="dog-card" onClick={() => onClick(dog)}>
      <img src={dog.image} alt={dog.name} />
      <div className="dog-info">
        <h3>{dog.name}</h3>
        <p>{dog.breed}</p>
      </div>
    </div>
  );
};

export default DogsCard;
