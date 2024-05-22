import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogsCard from './DogsCard';
import DogsPopup from './DogPopup';
import SearchBar from '../searchBar';
import './dogs.css';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/dogs?limit=15')
      .then(response => setDogs(response.data))
      .catch(error => console.error('Error fetching dogs:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (dog) => {
    setSelectedDog(dog);
    setModalIsOpen(true);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <div className="dogs-list">
        {filteredDogs.map(dog => (
          <DogsCard key={dog.id} dog={dog} onClick={handleCardClick} />
        ))}
      </div>
      <DogsPopup
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        dog={selectedDog}
      />
    </div>
  );
};

export default Dogs;
