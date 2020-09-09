import React, { useState } from 'react';

const SearchIcon = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <section>
      <button onClick={() => setShowSearchBar(!showSearchBar ? true : false)}>
        <img src={require('../images/searchIcon.svg')} alt="searchIcon" />
      </button>
      {showSearchBar && <input type="text" />}
    </section>
  );
};

export default SearchIcon;
