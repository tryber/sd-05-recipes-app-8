import React from 'react';
import Card from '../components/Card';
import { BtnCard } from '../components';

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const DoingRecipes = () => (
  <Card>
    «In Progress»
    <BtnCard {...logoutProps} />
  </Card>
);

export default DoingRecipes;
