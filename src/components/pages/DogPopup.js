import React from 'react';
import Modal from 'react-modal';

const DogsPopup = ({ isOpen, onRequestClose, dog }) => {
  if (!dog) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p><strong>Description:</strong> {dog.description}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default DogsPopup;
