import React, { useEffect, useContext } from 'react';
import {
  ProfileIcon,
  Header,
  MainContents,
  ExplorerButton,
  MenuBottom,
} from '../components';
import SurpriseButton from '../components/SurpriseButton';
import { fetchRandomMeal } from '../services/mealAPI';
import '../layouts/Explorer.css';
import { RecipesContext } from '../context/RecipesContext';

const ExploreRecipes = () => {
  const {
    location: { pathname },
  } = window;
  const recipeType = pathname === '/explorar/comidas' ? 'comidas' : 'bebidas';
  const headerExplorer = {
    left: <ProfileIcon />,
    center: `Explorar ${recipeType === 'comidas' ? 'Comidas' : 'Bebidas'}`,
  };
  const surpriseMe = {
    testId: 'explore-surprise',
    label: 'Me surpreenda',
    pathTo: `${recipeType}`,
  };
  const searchByIngredient = {
    testId: 'explore-by-ingredient',
    pathTo: `${recipeType}/ingredientes`,
    label: 'Por Ingredientes',
  };
  const searchByArea = {
    testId: 'explore-by-area',
    label: 'Por Local de Origem',
    pathTo: `${recipeType}/area`,
  };
  const { setRecipesList, setIdRecipe } = useContext(RecipesContext);
  useEffect(() => {
    fetchRandomMeal().then(({ meals }) => {
      setRecipesList(meals);
      setIdRecipe(meals[0].idMeal);
    });
  }, [setRecipesList, setIdRecipe]);
  return (
    <div>
      <Header {...headerExplorer} />
      <MainContents>
        <ExplorerButton {...searchByIngredient} />
        {pathname === '/explorar/comidas' && (
          <ExplorerButton {...searchByArea} />
        )}
        <SurpriseButton {...surpriseMe} />
      </MainContents>
      <MenuBottom />
    </div>
  );
};

export default ExploreRecipes;
