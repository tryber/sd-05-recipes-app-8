import React from 'react';
import { BtnCard, Header, ProfileIcon, Card, Finished } from '../components';

const headerDoneRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Feitas',
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

const DoneRecipes = () => {
  const hasDone = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <Card>
      {!hasDone && localStorage.setItem('doneRecipes', JSON.stringify([]))}
      <Header {...headerDoneRecipes} />
      {hasDone && <FilterButtons />}
      {hasDone && <Finished keyStorage={'doneRecipes'} />}
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default DoneRecipes;
