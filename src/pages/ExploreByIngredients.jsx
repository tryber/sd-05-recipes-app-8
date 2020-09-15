import React from 'react';
import { BtnCard, Header, ProfileIcon } from '../components';
import Card from '../layouts/Card';

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
  </Card>
);

export default ExploreByIngredients;
