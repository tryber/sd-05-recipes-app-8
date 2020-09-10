import React from 'react';
import Card from '../layouts/Card';
import { HeaderProfile, BtnProfileDone, BtnProfileFavorite, BtnProfileLogout } from '../components';

const Profile = () => (
  <Card>
    <HeaderProfile />
    <p data-testid="profile-email">{JSON.parse(localStorage.getItem('user')).email}</p>
    <BtnProfileDone />
    <BtnProfileFavorite />
    <BtnProfileLogout />
  </Card>
);

export default Profile;
