import React, { useState } from 'react';

const image = require('../images/searchIcon.svg');

const SearchIcon = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <section>
      <button onClick={() => setShowSearchBar(!showSearchBar)}>
        <img data-testid="search-top-btn" src={image} alt="searchIcon" />
      </button>
      {showSearchBar && <input data-testid="search-input" type="text" />}
    </section>
  );
};

export default SearchIcon;
