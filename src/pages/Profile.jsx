import React, { useContext } from 'react';
import Card from '../components/Card';
import { ProfileIcon, Header, BtnCard, MenuBottom } from '../components';
import { RecipesContext } from '../context/RecipesContext';
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
  id: 'page-title',
  action: false,
};

const Profile = () => {
  const {email} = useContext(RecipesContext);
  return (
    <Card>
      <Header {...headerProfile} />
      {console.log(email)}
      <p className="profile-user" data-testid="profile-email">
        {/* {JSON.parse(localStorage.getItem('user')).email} */}
        {email}
      </p>
      <BtnCard {...doneProps} />
      <BtnCard {...favoriteProps} />
      <BtnCard {...logoutProps} />
      <MenuBottom />
    </Card>
  );
};

export default Profile;
