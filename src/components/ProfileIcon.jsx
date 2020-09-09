import React from 'react';
import { Link } from 'react-router-dom';

const img = require('../images/profileIcon.svg');
const ProfileIcon = () => (
  <Link to="/perfil">
    <img data-testid="profile-top-btn" src={img} alt="profileIcon" />
  </Link>
);

export default ProfileIcon;
