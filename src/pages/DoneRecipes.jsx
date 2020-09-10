import React from 'react';
import { BackToLogin, Header } from '../components';
import Card from '../layouts/Card';

const DoneRecipes = () => (
  <Card>
    <Header />
    <h1>«Receitas Feitas»</h1>
    <BackToLogin />
  </Card>
);

export default DoneRecipes;
