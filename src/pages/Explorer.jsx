import React from 'react';
import Card from '../layouts/Card';
import { ProfileIcon, Header, BtnCard } from '../components';

const headerExplorer = {
  left: <ProfileIcon />,
  center: 'Explorar',
};

const mealsProps = {
  id: 'explore-food',
  direction: '/explorar/comidas',
  value: 'Explorar Comidas',
  type: 'comidas',
};

const cocktailsProps = {
  id: 'explore-drinks',
  direction: '/explorar/bebidas',
  value: 'Explorar Bebidas',
  type: 'bebidas',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const Explorer = () => (
  <Card>
    <Header {...headerExplorer} />
    <BtnCard {...mealsProps} />
    <BtnCard {...cocktailsProps} />
    <BtnCard {...logoutProps} />
  </Card>
);

export default Explorer;
