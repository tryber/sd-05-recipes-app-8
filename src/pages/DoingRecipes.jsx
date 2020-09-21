import React from 'react';
import Card from '../components/Card';
import { BtnCard } from '../components';

const logoutProps = {
  direction: '/',
  value: 'Sair',
  action: false,
  id: 'logout',
};

const doneProps = {
  direction: '/receitas-feitas',
  value: 'Receitas Feitas',
  action: false,
  id: 'done',
};

const DoingRecipes = () => (
  <Card>
    «In Progress»
    <BtnCard {...logoutProps} />
    <BtnCard {...doneProps} />
  </Card>
);

export default DoingRecipes;
