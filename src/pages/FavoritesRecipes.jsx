import React from 'react';
import { BtnCard, Header, ProfileIcon, Card, Finished } from '../components';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
  id: 'logout-btn',
  action: false,
};

const FilterButtons = () => (
  <div>
    <button data-testid="filter-by-all-btn"> All</button>
    <button data-testid="filter-by-food-btn">Foods</button>
    <button data-testid="filter-by-drink-btn">Drinks</button>
  </div>
);

const FavoritesRecipes = () => {
  const hasChosen = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <Card>
      {!hasChosen && localStorage.setItem('favoriteRecipes', JSON.stringify([]))}
      <Header {...headerFavoriteRecipes} />
      {hasChosen && <FilterButtons />}
      {hasChosen && <Finished keyStorage={'favoriteRecipes'} />}
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default FavoritesRecipes;
