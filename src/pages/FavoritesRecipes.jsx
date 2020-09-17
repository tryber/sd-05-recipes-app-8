import React from 'react';
import { BtnCard, Header, ProfileIcon } from '../components';
import Card from '../components/Card';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const FavoritesRecipes = () => (
  <Card>
    <Header {...headerFavoriteRecipes} />
    <BtnCard {...logoutProps} />
  </Card>
);

export default FavoritesRecipes;
