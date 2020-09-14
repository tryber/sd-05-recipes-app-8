import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard(props) {
  const {
    cardData: { strMealThumb, strMeal },
    index,
  } = props;
  return (
    <div className="recipe-card-container" data-testid={`${index}-recipe-card`}>
      <img
        src={strMealThumb}
        alt={strMeal}
        data-testid={`${index}-card-img`}
      />
    <h2 data-testid={`${index}-card-name`}>
      {strMeal}
    </h2>
    </div>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.string.isRequired,
  cardData: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
}
