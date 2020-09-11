import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Card from '../layouts/Card';
import { BtnCard } from '../components';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const RecipeDetails = () => {
  const { recipe, typeRecipe, isLoading } = useContext(RecipesContext);
  // const type = typeRecipe === 'comidas' ? 'meal' : 'cocktail';
  const category = typeRecipe === 'comidas' ? 'meals' : 'drinks';
  const name = typeRecipe === 'comidas' ? 'strMeal' : 'strDrink';
  const idRecipe = typeRecipe === 'comidas' ? '52882' : '178319';
  const img =
    typeRecipe === 'comidas'
      ? 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'
      : 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg';
  const progressProps = {
    direction: `/${typeRecipe}/${idRecipe}/in-progress`,
    value: 'Iniciar Receita',
    id: 'start-recipe-btn',
  };
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Card>
      <img data-testid="recipe-photo" src={img} alt="$menupic" style={{ maxHeight: '50px' }} />
      <p data-testid="recipe-title">{recipe[category][0][name]}</p>
      <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
      <img data-testid="favorite-btn" src={whiteHeartIcon} alt="whiteHeartIcon" />
      <span data-testid="recipe-category">{recipe[category][0].strCategory}</span>
      <ul data-testid="0-ingredient-name-and-measure">
        Ingredients
        <li>{recipe[category][0].strIngredient}</li>
      </ul>
      <p data-testid="instructions">Instructions</p>
      <span style={{ fontSize: '9px' }}>{recipe[category][0].strInstructions}</span>
      <video data-testid="video" src={recipe[category][0].strYoutube} alt="video" />
      <img
        data-testid="0-recomendation-card"
        src={img}
        alt="recomendation"
        style={{ maxHeight: '50px' }}
      />
      <span data-testid="0-recomendation-title" />
      <BtnCard {...progressProps} />
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default RecipeDetails;
