import React from 'react';
import { BtnProfileCard, HeaderTst, ProfileIcon } from '../components';
import Card from '../layouts/Card';

const headerDoneRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Feitas',
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const DoneRecipes = () => (
  <Card>
    <HeaderTst {...headerDoneRecipes} />
    <BtnProfileCard {...logoutProps} />
  </Card>
);

export default DoneRecipes;
