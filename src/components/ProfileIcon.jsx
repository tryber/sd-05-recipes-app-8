import React from 'react';
import { Link } from 'react-router-dom';
// import profileIcon from './images/profileIcon.svg'

const ProfileIcon = () => {
  return (
    <Link to="/perfil">
      <img
        data-testid="profile-top-btn"
        src={require('../images/profileIcon.svg')}
        alt="profileIcon"
      />
    </Link>
  );
};

export default ProfileIcon;
