import React, { useState } from 'react';

const image = require('../images/searchIcon.svg');

const SearchIcon = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <section>
      <button onClick={() => setShowSearchBar(!showSearchBar)}>
        <img src={image} alt="searchIcon" />
      </button>
      {showSearchBar && <input type="text" />}
    </section>
  );
};

export default SearchIcon;
