import React from 'react';
import { BtnCard, Header, ProfileIcon, MenuBottom } from '../components';
import Card from '../components/Card';

const headerIngredients = {
  left: <ProfileIcon />,
  center: 'Explorar Ingredientes',
};
const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const ExploreByIngredients = () => (
  <Card>
    <Header {...headerIngredients} />
    <BtnCard {...logoutProps} />
    <MenuBottom />
  </Card>
);

export default ExploreByIngredients;
