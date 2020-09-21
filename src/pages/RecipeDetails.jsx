import React, { useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { RecipesContext } from '../context/RecipesContext';
import {
  BtnStart,
  Card,
  ShareIcon,
  FavoriteClone,
  Ingredients,
  LogoRecipe,
  Instructions,
} from '../components';

const keys1 = ['meal', 'meals', 'strMeal', 'strMealThumb', 'idMeal', 'comida'];
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb', 'idDrink', 'bebida'];

const findYoutube = (receipt, types) =>
  types[1] === 'meals' && (
    <div data-testid="video">
      <YouTube
        videoId={receipt[types[1]][0].strYoutube.split('=')[1]}
        alt="video"
        opts={{ height: '200', width: '320' }}
      />
    </div>
  );

const findSuggestions = () => (
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
const dataId = 'share-btn';
const url = window.location.href.split('/');
const urlType = url.reverse()[1];
const urlId = url[0];

const RecipeDetails = () => {
  const {
    fetchRecipeDetails,
    idRecipe,
    isLoading,
    keys,
    recipe,
    setIdRecipe,
    setKeys,
    setTypeRecipe,
    typeRecipe,
  } = useContext(RecipesContext);
  useEffect(() => {
    setTypeRecipe(urlType);
    setIdRecipe(urlId);
    fetchRecipeDetails(urlType === 'comidas' ? 'meal' : 'cocktail', urlId);
  }, [typeRecipe]);
  if (typeRecipe === 'comidas') setKeys(keys1);
  else setKeys(keys2);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Card>
      <LogoRecipe {...{ recipe, keys }} />
      <ShareIcon id={recipe[keys[1]][0][keys[4]]} type={keys[5]} dataId={dataId} />
      <FavoriteClone
        {...{
          id: recipe[keys[1]][0][keys[4]],
          type: keys[5],
          area: recipe[keys[1]][0].strArea || '',
          category: recipe[keys[1]][0].strCategory || '',
          alcoholicOrNot: recipe[keys[1]][0].strAlcoholic || '',
          name: recipe[keys[1]][0][keys[2]],
          image: recipe[keys[1]][0][keys[3]],
        }}
        dataId="favorite-btn"
      />
      <Ingredients {...{ recipe, keys }} />
      <Instructions {...{ recipe, keys }} />
      {findYoutube(recipe, keys)}
      {findSuggestions()}
      <BtnStart {...startRecipe(typeRecipe, idRecipe, recipe, keys)} />
    </Card>
  );
};

export default RecipeDetails;
