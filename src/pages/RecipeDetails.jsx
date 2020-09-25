import React, { useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/Tips.css';
import {
  BtnStart,
  Card,
  ShareIcon,
  FavoriteClone,
  Ingredients,
  LogoRecipe,
  Instructions,
  // Tips,
} from '../components';

const keys1 = ['meal', 'meals', 'strMeal', 'strMealThumb', 'idMeal', 'comida'];
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb', 'idDrink', 'bebida'];
const favId = 'favorite-btn';
const shareId = 'share-btn';
const itemId = 'name-and-measure';

const YouTubeSample = (props) =>
  props.keys[1] === 'meals' && (
    <div data-testid="video">
      <YouTube
        videoId={props.recipe[props.keys[1]][0].strYoutube.split('=')[1]}
        alt="video"
        opts={{ height: '200', width: '320' }}
      />
    </div>
  );

const Suggestions = () => (
  <figure>
    <img
      data-testid="0-recomendation-card"
      src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
      alt="recommendation"
      style={{ maxHeight: '50px' }}
    />
    <figcaption>
      <span data-testid="0-recomendation-title" />
    </figcaption>
  </figure>
);

const startRecipe = (typeMenu, idMenu, receipt, type) => {
  const progressProps = {
    typeRecipe: typeMenu,
    idRecipe: idMenu,
    idTag: 'start-recipe-btn',
    value: ['Iniciar Receita', 'Continuar Receita'],
    recipe: receipt,
    keyword: type[1],
  };
  return progressProps;
};

const RecipeDetails = () => {
  const {
    // fetchMenu,
    fetchRecipeDetails,
    idRecipe,
    isLoading,
    keys,
    recipe,
    // recipesRoster,
    setIdRecipe,
    setKeys,
    setTypeRecipe,
    typeRecipe,
  } = useContext(RecipesContext);

  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[1];
    const urlId = url[0];
    setTypeRecipe(urlType);
    setIdRecipe(urlId);
    // const urlTail = 'search.php?s=';
    // fetchMenu(urlType);
    fetchRecipeDetails(urlType === 'comidas' ? 'meal' : 'cocktail', urlId);
  }, [typeRecipe]);

  if (typeRecipe === 'comidas') setKeys(keys1);
  else setKeys(keys2);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Card>
      <LogoRecipe {...{ recipe, keys }} />
      <ShareIcon id={idRecipe} type={typeRecipe} dataId={shareId} />
      <FavoriteClone {...{ recipe, keys, favId }} />
      <Ingredients {...{ recipe, keys, itemId }} />
      <Instructions {...{ recipe, keys }} />
      <YouTubeSample {...{ recipe, keys }} />
      <Suggestions />
      {/* <Tips {...{ recipesRoster }} /> */}
      <BtnStart {...startRecipe(typeRecipe, idRecipe, recipe, keys)} />
    </Card>
  );
};

export default RecipeDetails;
