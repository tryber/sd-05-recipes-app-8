import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const image = require('../images/searchIcon.svg');

const SearchIcon = () => {
  const { showSearchBar, setShowSearchBar } = useContext(RecipesContext);
  return (
    <section>
      <button onClick={() => setShowSearchBar(!showSearchBar)}>
        <img data-testid="search-top-btn" src={image} alt="searchIcon" />
      </button>
    </section>
  );
};

export default SearchIcon;
