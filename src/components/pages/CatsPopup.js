import React from 'react';
import Modal from 'react-modal';

const CatsPopup = ({ isOpen, onRequestClose, cat }) => {
  if (!cat) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{cat.name}</h2>
      <img src={cat.image} alt={cat.name} />
      <p><strong>Family:</strong> {cat.family}</p>
      <p><strong>Description:</strong> {cat.description}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CatsPopup;
