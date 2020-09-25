import React from 'react';
import PropTypes from 'prop-types';

const filterByType = (hasChosen, setHasChosen, allRecipes, typeMenu) => {
  console.log(hasChosen, setHasChosen, typeMenu, allRecipes);
  setHasChosen(
    !typeMenu
      ? Object.values(allRecipes)
      : Object.values(allRecipes).filter((x) => x.type.includes(typeMenu)),
  );
};

const FilterButtons = (props) => (
  <div className="category-list">
    <button
      data-testid="filter-by-all-btn"
      className={'button-category-filter'}
      onClick={() => filterByType(props.hasChosen, props.setHasChosen, props.allRecipes)}
    >
      All
    </button>
    <button
      data-testid="filter-by-food-btn"
      className={'button-category-filter'}
      onClick={() => filterByType(props.hasChosen, props.setHasChosen, props.allRecipes, 'comida')}
    >
      Foods
    </button>
    <button
      data-testid="filter-by-drink-btn"
      className={'button-category-filter'}
      onClick={() => filterByType(props.hasChosen, props.setHasChosen, props.allRecipes, 'bebida')}
    >
      Drinks
    </button>
  </div>
);
export default FilterButtons;

FilterButtons.propTypes = {
  allRecipes: PropTypes.node.isRequired,
  hasChosen: PropTypes.node.isRequired,
  setHasChosen: PropTypes.node.isRequired,
};
