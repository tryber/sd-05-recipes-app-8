import React from 'react';
import { BtnCard, Header, ProfileIcon, SearchIcon, MenuBottom, SearchBar, FilterCard } from '../components';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  searchBar: <SearchBar />,
  id: 'page-title',
};

const headerMainRecipesDrinks = {
  left: <ProfileIcon />,
  center: 'Drinks',
  right: <SearchIcon />,
  searchBar: <SearchBar />,
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const exploreProps = {
  direction: '/explorar',
  value: 'Explorar',
  id: 'explore-bottom-btn',
};

export const MainRecipes = () => (
  <Card>
    <Header {...headerMainRecipes} />
    {/* <BtnCard {...logoutProps} />
    <BtnCard {...exploreProps} /> */}
    <FilterCard />
    <MenuBottom />
  </Card>
);

export const MainRecipesDrinks = () => (
  <Card>
    <Header {...headerMainRecipesDrinks} />
    <FilterCard />
    <MenuBottom />
  </Card>
)
