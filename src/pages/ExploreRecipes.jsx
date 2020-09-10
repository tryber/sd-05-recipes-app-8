import React from 'react';
import Card from '../layouts/Card';
import { ProfileIcon, HeaderTst, BtnProfileCard } from '../components';

const headerExplorer = {
  left: <ProfileIcon />,
  center: 'Explorar',
};

const searchByIngredient = {
  id: 'explore-by-ingredient',
  value: 'Por Ingredientes',
};

const searchByArea = {
  id: 'explore-by-area',
  value: 'Por Local de Origem',
};

const surpriseMe = {
  id: 'explore-surprise',
  value: 'Me surpreenda',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const ExploreRecipes = () => (
  <Card>
    <HeaderTst {...headerExplorer} />
    <BtnProfileCard {...searchByIngredient} />
    <BtnProfileCard {...searchByArea} />
    <BtnProfileCard {...surpriseMe} />
    <BtnProfileCard {...logoutProps} />
  </Card>
);

export default ExploreRecipes;
