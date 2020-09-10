import React from 'react';
import { BtnCard, Header, ProfileIcon, SearchIcon } from '../components';
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
    <Header {...headerMainRecipes} />
    <BtnCard {...logoutProps} />
    <BtnCard {...exploreProps} />
  </Card>
);

export default MainRecipes;
