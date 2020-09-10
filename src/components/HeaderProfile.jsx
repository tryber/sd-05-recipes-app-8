import React from 'react';
import { ProfileIcon } from './';

const HeaderProfile = () => (
  <div className="Header">
    <ProfileIcon />
    <h2 data-testid="page-title">Perfil</h2>
  </div>
);

export default HeaderProfile;
