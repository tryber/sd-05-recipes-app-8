import React from 'react';
import { ProfileIcon, SearchIcon } from './';

const Header = () => (
  <div className="Header">
    <ProfileIcon />
    <h2 data-testid="page-title">«Comidas»</h2>
    <SearchIcon />
  </div>
);

export default Header;
