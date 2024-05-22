import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BirdCard from './BirdCard';
import BirdPopup from './BirdPopup';
import SearchBar from '../searchBar';
import './birds.css';

const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBird, setSelectedBird] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/birds?limit=15 ')
      .then(response => setBirds(response.data))
      .catch(error => console.error('Error fetching birds:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (bird) => {
    setSelectedBird(bird);
    setModalIsOpen(true);
  };

  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <div className="birds-list">
        {filteredBirds.map(bird => (
          <BirdCard key={bird.id} bird={bird} onClick={handleCardClick} />
        ))}
      </div>
      <BirdPopup
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        bird={selectedBird}
      />
    </div>
  );
};

export default Birds;
