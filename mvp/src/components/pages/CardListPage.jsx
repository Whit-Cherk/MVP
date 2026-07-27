import React, { useState, useEffect } from 'react';
import HeaderText from '../HeaderText';
import SearchBar from '../SearchBar';
import VerticalCard from '../VerticalCard';
import BackButton from '../BackButton';

const CardListPage = ({ title, data, onItemClick, onBack = -1 }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  // Filters the listings based on the search bar input
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <BackButton goTo={onBack}/>

      <div className="section-header">
        <HeaderText text={title} />
      </div>
      
        <SearchBar 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="search" 
        />
      

      <div className="cards-grid-container">
        {filteredData.map((item) => (
          <VerticalCard
            key={item.id}
            imageSrc={item.image}
            text1={item.name}
            text2={`$${item.price.toFixed(2)}`}
            text3={item.amountAvailable !== null ? `${item.amountAvailable} in stock` : 'Made to order'}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default CardListPage;