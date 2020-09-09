import React from 'react';
import { Link } from 'react-router-dom';

const BtnProfileLogout = () => (
  <Link to="/">
    <button data-testid="profile-logout-btn" onClick={() => localStorage.clear()}>
      Sair
    </button>
  </Link>
);

export default BtnProfileLogout;
