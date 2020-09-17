import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/RecipeCard.css';

export default function RecipeCard(props) {
  const { typeRecipe, setIdRecipe } = useContext(RecipesContext);
  const { cardData, index } = props;
  const keys =
    typeRecipe === 'comidas'
      ? ['strMealThumb', 'strMeal', 'idMeal']
      : ['strDrinkThumb', 'strDrink', 'idDrink'];
  return (
    <div className="recipe-card-container" data-testid={`${index}-recipe-card`}>
      <Link
        to={`/${typeRecipe}/${cardData[keys[2]]}`}
        onClick={() => setIdRecipe(cardData[keys[2]])}
      >
        <img
          className="recipe-img"
          src={cardData[keys[0]]}
          alt={cardData[keys[1]]}
          data-testid={`${index}-card-img`}
        />
      </Link>
      <h2 data-testid={`${index}-card-name`}>{cardData[keys[1]]}</h2>
    </div>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.string.isRequired,
  cardData: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
