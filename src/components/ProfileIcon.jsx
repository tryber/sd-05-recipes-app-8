import React from 'react';
import { Link } from 'react-router-dom';

const image = require('../images/profileIcon.svg');

const ProfileIcon = () => (
  <Link to="/perfil">
    <img data-testid="profile-top-btn" src={image} alt="profileIcon" />
  </Link>
);

export default ProfileIcon;
