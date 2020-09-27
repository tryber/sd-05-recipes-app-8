import React from 'react';
import {
  Header,
  ProfileIcon,
  Card,
  Finished,
  FilterButtons,
} from '../components';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

const FavoritesRecipes = () => (
  <Card>
    <Header {...headerFavoriteRecipes} />
    <FilterButtons />
    <Finished />
  </Card>
);

export default FavoritesRecipes;
