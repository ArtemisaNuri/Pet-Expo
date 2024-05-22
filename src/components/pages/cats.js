import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatsCard from './CatsCard';
import SearchBar from '../searchBar';
import CatsPopup from './CatsPopup';
import './cats.css'



const Cats = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCats, setSelectedCats] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/cats?limit=15 ')
      .then(response => setCats(response.data))
      .catch(error => console.error('Error fetching cats:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (cat) => {
    setSelectedCats(cat);
    setModalIsOpen(true);
  };

  const filteredCats = cats.filter(cats =>
    cats.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <div className="cats-list">
        {filteredCats.map(cat => (
          <CatsCard key={cat.id} cat={cat} onClick={handleCardClick} />
        ))}
      </div>
      <CatsPopup
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        cat={selectedCats}
      />
    </div>
  );
};

export default Cats;
