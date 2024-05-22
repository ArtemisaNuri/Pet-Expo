import React from 'react';

const BirdCard = ({ bird, onClick }) => {
  return (
    <div className="bird-card" onClick={() => onClick(bird)}>
      <img src={bird.image} alt={bird.name} />
      <h3>{bird.name}</h3>
      <p>{bird.family}</p>
    </div>
  );
};

export default BirdCard;
