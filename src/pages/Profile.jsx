import React from 'react';
import Card from '../components/Card';
import { ProfileIcon, Header, BtnCard } from '../components';

const doneProps = {
  id: 'profile-done-btn',
  direction: '/receitas-feitas',
  value: 'Receitas Feitas',
  action: null,
  details: null,
};

const favoriteProps = {
  id: 'profile-favorite-btn',
  direction: '/receitas-favoritas',
  value: 'Receitas Favoritas',
  action: null,
  details: null,
};

const logoutProps = {
  id: 'profile-logout-btn',
  direction: '/',
  value: 'Sair',
  action: true,
  details: null,
};

const headerProfile = {
  left: <ProfileIcon />,
  center: 'Perfil',
  id: 'page-title',
  action: null,
  details: null,
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
