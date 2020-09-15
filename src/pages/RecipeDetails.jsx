import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import YouTube from 'react-youtube';
import Card from '../layouts/Card';
import { BtnCard } from '../components';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const logoutProps = {
  direction: '/',
  value: 'Sair',
  action: null,
  id: null,
  details: null,
};

const keys1 = ['meal', 'meals', 'strMeal', 'strMealThumb'];
const keys2 = ['cocktail', 'drinks', 'strDrink', 'strDrinkThumb'];

const RecipeDetails = () => {
  const { recipe, typeRecipe, isLoading, idRecipe, fetchRecipeDetails } = useContext(
    RecipesContext,
  );
  // const { typeRecipe } = useContext(RecipesContext);
  const keys = typeRecipe === 'comidas' ? keys1 : keys2;
  const progressProps = {
    details: true,
    direction: `/${typeRecipe}/${keys[3]}/in-progress`,
    id: 'start-recipe-btn',
    value: 'Iniciar Receita',
    action: null,
  };

  useEffect(() => {
    fetchRecipeDetails(keys[0], idRecipe);
  }, [keys[0]]);

  const findIngredients = () => (
    <div>
      <h4 data-testid="0-ingredient-name-and-measure">Ingredients</h4>
      <ul>
        <li>{recipe[keys[1]][0].strIngredient1}</li>
      </ul>
    </div>
  );

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    // return (
    <Card>
      <figure>
        <img
          data-testid="recipe-photo"
          src={recipe[keys[1]][0][keys[3]]}
          alt="$menupic"
          style={{ maxHeight: '50px' }}
        />
        <figcaption>
          <p data-testid="recipe-title">{recipe[keys[1]][0][keys[2]]}</p>
        </figcaption>
      </figure>
      <figure>
        <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
        <img data-testid="favorite-btn" src={whiteHeartIcon} alt="whiteHeartIcon" />
      </figure>
      <span data-testid="recipe-category">{recipe[keys[1]][0].strCategory}</span>
      {findIngredients()}
      <p data-testid="instructions">Instructions</p>
      <span style={{ fontSize: '9px' }}>{recipe[keys[1]][0].strInstructions}</span>
      <YouTube data-testid="video" src={recipe[keys[1]][0].strYoutube} alt="video" />
      {/* <img
        data-testid="0-recomendation-card"
        src={keys[5]}
        alt="recomendation"
        style={{ maxHeight: '50px' }}
      /> */}
      <span data-testid="0-recomendation-title" />
      <BtnCard {...progressProps} />
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default RecipeDetails;
