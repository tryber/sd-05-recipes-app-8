import React from 'react';
import { BtnProfileCard, HeaderTst, ProfileIcon, SearchIcon } from '../components';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
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

const MainRecipes = () => (
  <Card>
    <HeaderTst {...headerMainRecipes} />
    <BtnProfileCard {...logoutProps} />
    <BtnProfileCard {...exploreProps} />
  </Card>
);

export default MainRecipes;
