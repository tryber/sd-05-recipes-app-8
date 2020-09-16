import React, { useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { RecipesContext } from '../context/RecipesContext';
import Card from '../layouts/Card';
import { BtnCard } from '../components';
// import { isTypedArray } from 'lodash';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import getRecipeDetails from '../services/getRecipeDetails';

const logoutProps = {
  direction: '/',
  value: 'Sair',
  action: null,
  id: null,
  details: null,
};

const keys1 = ['meal', 'meals', 'strMeal', 'strMealThumb'];
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb'];

const findLogo = (receipt, types) => (
  <figure>
    <img
      data-testid="recipe-photo"
      src={receipt[types[1]][0][types[3]]}
      alt="$menupic"
      style={{ maxHeight: '50px' }}
    />
    <figcaption>
      <p data-testid="recipe-title">{receipt[types[1]][0][types[2]]}</p>
      <span data-testid="recipe-category">{receipt[types[1]][0].strCategory}</span>
    </figcaption>
  </figure>
);

const findIcons = () => (
  <figure>
    <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
    <img data-testid="favorite-btn" src={whiteHeartIcon} alt="whiteHeartIcon" />
  </figure>
);

const findIngredients = (receipt, types) => {
  const ingredientsList = (ingredientsRecipes) => (
    <div>
      <h4>Ingredients</h4>
      {console.log(ingredientsRecipes)}
      <ul>
        {ingredientsRecipes.map(
          (ingredient, index) =>
            ingredient[0] !== ('' || null) && (
              <li
                data-testid={`${index}-ingredient-name-and-measure`}
                style={{ listStyleType: 'none' }}
              >
                {`${ingredient[1]}   ${ingredient[0]}`}
              </li>
            ),
        )}
      </ul>
    </div>
  );
  if (types[1] === 'meals') {
    const ingredientsMenu = Object.values(receipt[types[1]][0]).slice(9, 29);
    const measureRecipes = Object.values(receipt[types[1]][0]).slice(29, 49);
    const merged = ingredientsMenu.map((x, i) => [x, measureRecipes[i]]);
    return ingredientsList(merged);
  }
  const ingredientsMenu = Object.values(receipt[types[1]][0]).slice(21, 36);
  const measureRecipes = Object.values(receipt[types[1]][0]).slice(36, 51);
  const merged = ingredientsMenu.map((x, i) => [x, measureRecipes[i]]);
  return ingredientsList(merged);
};

const findMethod = (receipt, types) => (
  <div>
    <p>Instructions</p>
    <p data-testid="instructions" style={{ fontSize: '13px' }}>
      {receipt[types[1]][0].strInstructions}
    </p>
  </div>
);

const findYoutube = (receipt, types) =>
  types[1] === 'meals' && (
    <video data-testid="video">
      <YouTube
        videoId={receipt[types[1]][0].strYoutube.split('=')[1]}
        alt="video"
        opts={{ height: '200', width: '320' }}
      />
    </video>
  );

const findSuggestions = () => (
  <figure>
    <img
      data-testid="0-recomendation-card"
      src={whiteHeartIcon}
      alt="recommendation"
      style={{ maxHeight: '50px' }}
    />
    <figcaption>
      <span data-testid="0-recomendation-title" />
    </figcaption>
  </figure>
);

const RecipeDetails = () => {
  const {
    recipe,
    typeRecipe,
    setTypeRecipe,
    isLoading,
    setIdRecipe,
    fetchRecipeDetails,
  } = useContext(RecipesContext);
  const keys = typeRecipe === 'comidas' ? keys1 : keys2;
  const progressProps = {
    details: true,
    direction: `/${typeRecipe}/${keys[3]}/in-progress`,
    id: 'start-recipe-btn',
    value: 'Iniciar Receita',
    action: null,
  };

  useEffect(() => {
    const url = window.location.href.split('/');
    setTypeRecipe(`${url[url.length - 2]}`);
    setIdRecipe(`${url[url.length - 1]}`);
    fetchRecipeDetails(
      url[url.length - 2] === 'comidas' ? 'meal' : 'cocktail',
      url[url.length - 1],
    );
    // fetchRecipeDetails(keys[0], idRecipe);
  }, [typeRecipe]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Card>
      {findLogo(recipe, keys)}
      {findIcons(keys)}
      {findIngredients(recipe, keys)}
      {findMethod(recipe, keys)}
      {findYoutube(recipe, keys)}
      {findSuggestions()}
      <BtnCard {...progressProps} />
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default RecipeDetails;
