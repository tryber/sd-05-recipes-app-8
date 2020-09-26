import React from 'react';
import Card from '../components/Card';
import { ProfileIcon, Header, BtnCard, MenuBottom } from '../components';
import '../layouts/Profile.css';

const doneProps = {
  id: 'profile-done-btn',
  direction: '/receitas-feitas',
  value: 'Receitas Feitas',
  action: false,
};

const favoriteProps = {
  id: 'profile-favorite-btn',
  direction: '/receitas-favoritas',
  value: 'Receitas Favoritas',
  action: false,
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
  right: false,
  id: 'page-title',
  action: false,
};

const Profile = () => (
  <Card>
    {!localStorage.getItem('user') &&
      localStorage.setItem('user', JSON.stringify({ email: 'teste@teste.com' }))}
    <Header {...headerProfile} />
    <p className="category-list" data-testid="profile-email">
      {JSON.parse(localStorage.getItem('user')).email}
    </p>
    <div className="category-list">
      <BtnCard {...doneProps} />
      <BtnCard {...favoriteProps} />
      <BtnCard {...logoutProps} />
    </div>
    <MenuBottom />
  </Card>
);

export default Profile;
