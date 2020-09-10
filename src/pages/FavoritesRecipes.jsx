import React from 'react';
import { BtnProfileCard, HeaderTst, ProfileIcon } from '../components';
import Card from '../layouts/Card';

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
    <HeaderTst {...headerFavoriteRecipes} />
    <BtnProfileCard {...logoutProps} />
  </Card>
);

export default FavoritesRecipes;
