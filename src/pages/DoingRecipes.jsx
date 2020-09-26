import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  BtnCard,
  Card,
  Ingredients,
  LogoRecipe,
  Instructions,
  ShareIcon,
  FavoriteClone,
} from '../components';

const doneProps = {
  direction: '/receitas-feitas',
  value: 'Receitas Feitas',
  action: false,
  id: 'done',
};

const keys1 = ['meal', 'meals', 'strMeal', 'strMealThumb', 'idMeal', 'comida'];
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb', 'idDrink', 'bebida'];
const shareId = 'share-btn';
const favId = 'favorite-btn';
const itemId = 'step';

const FinalizeBtn = () => (
  <button data-testid="finish-recipe-btn" disabled="true">
    Finalizar Receita
  </button>
);
const DoingRecipes = () => {
  const {
    recipe,
    keys,
    setTypeRecipe,
    setIdRecipe,
    fetchRecipeDetails,
    isLoading,
    typeRecipe,
    setKeys,
  } = useContext(RecipesContext);

  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[2];
    const urlId = url[1];
    setTypeRecipe(urlType);
    setIdRecipe(urlId);
    fetchRecipeDetails(urlType === 'comidas' ? 'meal' : 'cocktail', urlId);
  }, [typeRecipe, fetchRecipeDetails, setIdRecipe, setTypeRecipe]);

  if (typeRecipe === 'comidas') setKeys(keys1);
  else setKeys(keys2);

  return isLoading ? (
    <p>Processando...</p>
  ) : (
    <Card>
      <LogoRecipe {...{ recipe, keys }} />
      <ShareIcon id={recipe[keys[1]][0][keys[4]]} type={`${keys[5]}s`} dataId={shareId} />
      <FavoriteClone {...{ recipe, keys, favId }} />
      <Ingredients {...{ recipe, keys, itemId }} />
      <Instructions {...{ recipe, keys }} />
      <BtnCard {...doneProps} />
      <FinalizeBtn />
    </Card>
  );
};

export default DoingRecipes;
