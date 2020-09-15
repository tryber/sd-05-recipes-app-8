import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import './RecipeCard.css';

export default function DrinkCard(props) {
  const { setIdRecipe } = useContext(RecipesContext);
  const {
    cardData: { strDrinkThumb, strDrink, idDrink },
    index,
  } = props;
  return (
    <div className="recipe-card-container" data-testid={`${index}-recipe-card`}>
      <Link to={`/bebidas/${idDrink}`} onClick={() => setIdRecipe(idDrink)}>
        <img
          className="recipe-img"
          src={strDrinkThumb}
          alt={strDrink}
          data-testid={`${index}-card-img`}
        />
      </Link>
      <h2 data-testid={`${index}-card-name`}>{strDrink}</h2>
    </div>
  );
}

DrinkCard.propTypes = {
  index: PropTypes.string.isRequired,
  cardData: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};
