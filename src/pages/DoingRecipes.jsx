import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { BtnCard, Card, Ingredients, LogoRecipe } from '../components';

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

const DoingRecipes = () => {
  const { recipe, keys } = useContext(RecipesContext);
  const key = Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes')));
  const receipt = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const menu = { item: Object.values(receipt[key])[0], quantity: Array(20).fill('') };
  console.log(menu.item, menu.quantity);
  return (
    <Card>
      <LogoRecipe {...{ recipe, keys }} />
      <Ingredients {...{ recipe, keys }} />
      <BtnCard {...logoutProps} />
      <BtnCard {...doneProps} />
    </Card>
  );
};

export default DoingRecipes;
