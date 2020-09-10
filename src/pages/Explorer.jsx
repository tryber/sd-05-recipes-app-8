import React from 'react';
import Card from '../layouts/Card';
import { ProfileIcon, HeaderTst, BtnProfileCard } from '../components';

const headerExplorer = {
  left: <ProfileIcon />,
  center: 'Explorar',
};

const mealsProps = {
  id: 'explore-food',
  direction: '/explorar/comidas',
  value: 'Explorar Comidas',
};

const cocktailsProps = {
  id: 'explore-drinks',
  direction: '/explorar/bebidas',
  value: 'Explorar Bebidas',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const Explorer = () => (
  <Card>
    <HeaderTst {...headerExplorer} />
    <BtnProfileCard {...mealsProps} />
    <BtnProfileCard {...cocktailsProps} />
    <BtnProfileCard {...logoutProps} />
  </Card>
);

export default Explorer;
