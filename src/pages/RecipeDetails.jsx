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
<<<<<<< HEAD
const keys2 = [
  'cocktail',
  'drinks',
  'strDrink',
  'strDrinkThumb',
  'idDrink',
  'bebida',
];

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
      {types[1] === 'drinks' ? (
        <span data-testid="recipe-category">
          {receipt[types[1]][0].strAlcoholic}
        </span>
      ) : (
        <span data-testid="recipe-category">
          {receipt[types[1]][0].strCategory}
        </span>
      )}
    </figcaption>
  </figure>
);

const findIngredients = (receipt, types) => {
  const ingredientsList = (ingredientsRecipes) => (
    <div>
      <h4>Ingredients</h4>
      <ul>
        {ingredientsRecipes.map(
          (ingredient, index) =>
            ingredient[0] && (
              <li
                data-testid={`${index}-ingredient-name-and-measure`}
                style={{ listStyleType: 'none' }}
                key={`${ingredient[0]} ${ingredient[1]}`}
              >
                <label htmlFor={`${ingredient[1]} ${ingredient[0]}`}>
                  <input type="checkbox" id={`${ingredient[1]} ${index}`} />
                </label>
                {`${ingredient[1]} ${ingredient[0]}`}
              </li>
            ),
        )}
      </ul>
    </div>
  );
  if (types[1] === 'meals') {
    const ingredientsMenu = Object.values(receipt[types[1]][0]).slice(9, 29);
    const measureRecipes = Object.values(receipt[types[1]][0]).slice(29, 49);
    const merged = ingredientsMenu.map((value, i) => [
      value,
      measureRecipes[i],
    ]);
    return ingredientsList(merged);
  }
  const ingredientsMenu = Object.values(receipt[types[1]][0]).slice(21, 36);
  const measureRecipes = Object.values(receipt[types[1]][0]).slice(36, 51);
  const merged = ingredientsMenu.map((value, i) => [value, measureRecipes[i]]);
  return ingredientsList(merged);
};

const findMethod = (receipt, types) => (
  <div>
    <h4>Instructions</h4>
    <p data-testid="instructions" style={{ fontSize: '13px' }}>
      {receipt[types[1]][0].strInstructions}
    </p>
  </div>
);

const findYoutube = (receipt, types) =>
  types[1] === 'meals' && (
=======
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb', 'idDrink', 'bebida'];
const favId = 'favorite-btn';
const shareId = 'share-btn';
const itemId = 'name-and-measure';

const YouTubeSample = (props) =>
  props.keys[1] === 'meals' && (
>>>>>>> 4c4751d851031d089f6466c14386ab8ac46836c1
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
    const url = window.location.href.split('/');
    const urlType = url.reverse()[1];
    const urlId = url[0];
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
      <ShareIcon id={idRecipe} type={typeRecipe} dataId={shareId} />
      <FavoriteClone {...{ recipe, keys, favId }} />
      <Ingredients {...{ recipe, keys, itemId }} />
      <Instructions {...{ recipe, keys }} />
      <YouTubeSample {...{ recipe, keys }} />
      <Suggestions {...{ recipe, keys }} />
      <BtnStart {...startRecipe(typeRecipe, idRecipe, recipe, keys)} />
    </Card>
  );
};

export default RecipeDetails;
