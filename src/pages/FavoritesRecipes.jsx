import React from 'react';
import { BackToLogin, Header } from '../components';
import Card from '../layouts/Card';

const FavoritesRecipes = () => (
  <Card>
    <Header />
    <h1>«Receitas Favoritas»</h1>
    <BackToLogin />
  </Card>
);

export default FavoritesRecipes;
