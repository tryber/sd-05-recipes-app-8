import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Card from '../layouts/Card';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const RecipeDetails = () => {
  const { fetchRecipeDetails } = useContext(RecipesContext);
  useEffect(() => {
    fetchRecipeDetails('meal', '52771');
  }, []);
  return (
    <Card>
      <img
        data-testid="recipe-photo"
        src={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}
        alt="$52771"
        style={{ maxHeight: '50px' }}
      />
      <p data-testid="recipe-title">Spicy Arrabiata Penne</p>
      <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
      <img data-testid="favorite-btn" src={whiteHeartIcon} alt="whiteHeartIcon" />
      <span data-testid="recipe-category">Vegetarian</span>
      <ul data-testid="0-ingredient-name-and-measure">
        Ingredients
        <li>penne rigate</li>
      </ul>
      <p data-testid="instructions">Instructions</p>
      <span style={{ fontSize: '9px' }}>
        Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the
        pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet
        over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the
        garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red
        chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5
        minutes. Remove from the heat and add the chopped ...
      </span>
      <img data-testid="video" src={'https://www.youtube.com/watch?v=1IszT_guI08'} alt="video" />
      <img data-testid="0-recomendation-card" src="strDrinkAlternate" alt="strDrinkAlternate" />
      <span data-testid="0-recomendation-title" />
      <button data-testid="start-recipe-btn">Iniciar Receita</button>
    </Card>
  );
};

export default RecipeDetails;
