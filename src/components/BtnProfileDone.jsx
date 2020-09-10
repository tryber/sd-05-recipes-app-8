import React from 'react';
import { Link } from 'react-router-dom';

const BtnProfileDone = () => (
  <Link to="/receitas-feitas">
    <button data-testid="profile-done-btn">Receitas Feitas</button>
  </Link>
);

export default BtnProfileDone;
