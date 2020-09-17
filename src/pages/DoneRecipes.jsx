import React from 'react';
import { BtnCard, Header, ProfileIcon } from '../components';
import Card from '../components/Card';

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
    <Header {...headerDoneRecipes} />
    <BtnCard {...logoutProps} />
  </Card>
);

export default DoneRecipes;
