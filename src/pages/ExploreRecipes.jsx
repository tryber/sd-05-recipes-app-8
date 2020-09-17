import React, { useContext } from 'react';
import Card from '../components/Card';
import { ProfileIcon, Header, BtnCard } from '../components';
import { RecipesContext } from '../context/RecipesContext';

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

const ExploreRecipes = () => {
  const { typeRecipe } = useContext(RecipesContext);
  const headerExplorer = {
    left: <ProfileIcon />,
    center: `Explorar ${typeRecipe}`,
  };
  const searchByIngredient = {
    id: 'explore-by-ingredient',
    direction: `/explorar/${typeRecipe}/ingredientes`,
    value: 'Por Ingredientes',
  };
  return (
    <Card>
      <Header {...headerExplorer} />
      <BtnCard {...searchByIngredient} />
      <BtnCard {...searchByArea} />
      <BtnCard {...surpriseMe} />
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default ExploreRecipes;
