import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import './RecipeCard.css';

export default function RecipeCard(props) {
  const { typeRecipe, setIdMeal } = useContext(RecipesContext);
  const {
    cardData: { strMealThumb, strMeal, idMeal },
    index,
  } = props;
  return (
    <div className="recipe-card-container" data-testid={`${index}-recipe-card`}>
      <Link to={`/${typeRecipe}/${idMeal}`} onClick={() => setIdMeal(idMeal)}>
        <img
          className="recipe-img"
          src={strMealThumb}
          alt={strMeal}
          data-testid={`${index}-card-img`}
        />
      </Link>
      <h2 data-testid={`${index}-card-name`}>{strMeal}</h2>
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
