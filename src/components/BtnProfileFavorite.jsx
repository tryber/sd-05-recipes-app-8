import React from 'react';
import { Link } from 'react-router-dom';

const BtnProfileFavorite = () => (
  <Link to="/receitas-favoritas">
    <button data-testid="profile-favorite-btn">Receitas Favoritas</button>
  </Link>
);

export default BtnProfileFavorite;
