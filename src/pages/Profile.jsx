import React from 'react';
import Card from '../layouts/Card';
import { ProfileIcon, Header, BtnCard } from '../components';

const doneProps = {
  id: 'profile-done-btn',
  direction: '/receitas-feitas',
  value: 'Receitas Feitas',
};

const favoriteProps = {
  id: 'profile-favorite-btn',
  direction: '/receitas-favoritas',
  value: 'Receitas Favoritas',
};

const logoutProps = {
  id: 'profile-logout-btn',
  direction: '/',
  value: 'Sair',
  action: true,
};

const headerProfile = {
  left: <ProfileIcon />,
  center: 'Perfil',
  id: 'page-title',
};

const Profile = () => (
  <Card>
    <Header {...headerProfile} />
    <p data-testid="profile-email">{JSON.parse(localStorage.getItem('user')).email}</p>
    <BtnCard {...doneProps} />
    <BtnCard {...favoriteProps} />
    <BtnCard {...logoutProps} />
  </Card>
);

export default Profile;