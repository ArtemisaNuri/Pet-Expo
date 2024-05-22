import React from 'react';
import Modal from 'react-modal';
import './birdpopUp.css';

const BirdPopup = ({ isOpen, onRequestClose, bird }) => {
  if (!bird) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{bird.name}</h2>
      <img src={bird.image} alt={bird.name} />
      <p><strong>Family:</strong> {bird.family}</p>
      <p><strong>Description:</strong> {bird.description}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default BirdPopup;
