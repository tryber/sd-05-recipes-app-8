import React from 'react';
import PropTypes from 'prop-types';
import '../layouts/IngredientCard.css';
import { drinkIngSRC } from '../services/drinkAPI.js';
import { mealIngSRC } from '../services/mealAPI.js';

const IngredientCard = (props) => {
  const { idx, text } = props;
  const url = window.location.pathname.split('/')[2];
  const imagePath = url === 'comidas' ? mealIngSRC(text) : drinkIngSRC(text);
  return (
    <div
      className="ingredient-card-container"
      data-testid={`${idx}-ingredient-card`}
    >
      <img
        className="ingredient-img"
        data-testid={`${idx}-card-img`}
        src={imagePath}
        alt={`${text} pic`}
      />
      <span data-testid={`${idx}-card-name`}>{text}</span>
    </div>
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  idx: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
