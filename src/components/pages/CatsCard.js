import React from 'react';

const CatsCard = ({ cat, onClick }) => {
    return (
      <div className="cat-card" onClick={() => onClick(cat)}>
        <img src={cat.image} alt={cat.name} />
        <h3>{cat.name}</h3>
      </div>

            
    );
}

export default CatsCard;
