import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';

const FilterButtons = () => {
  const { setFilterFavorites } = useContext(RecipesContext);
  return (
    <div className="category-list">
      <button
        data-testid="filter-by-all-btn"
        className={'button-category-filter'}
        onClick={() => {
          setFilterFavorites('');
        }}
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        className={'button-category-filter'}
        onClick={() => {
          setFilterFavorites('comida');
        }}
      >
        Foods
      </button>
      <button
        data-testid="filter-by-drink-btn"
        className={'button-category-filter'}
        onClick={() => {
          setFilterFavorites('bebida');
        }}
      >
        Drinks
      </button>
    </div>
  );
};
export default FilterButtons;

FilterButtons.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasChosen: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHasChosen: PropTypes.func.isRequired,
};
