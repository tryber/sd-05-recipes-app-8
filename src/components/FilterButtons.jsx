import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import PropTypes from 'prop-types';

// const filterByType = (hasChosen, setHasChosen, allRecipes, typeMenu) => {
//   setHasChosen(
//     !typeMenu
//       ? Object.values(allRecipes)
//       : Object.values(allRecipes).filter((x) => x.type.includes(typeMenu)),
//   );
// };

const FilterButtons = (props) => {
  const { setFilterFavorites } = useContext(RecipesContext);
  return (
    <div className="category-list">
      <button
        data-testid="filter-by-all-btn"
        className={'button-category-filter'}
        onClick={() => {
          // filterByType(props.hasChosen, props.setHasChosen, props.allRecipes);
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
          // filterByType(
          //   props.hasChosen,
          //   props.setHasChosen,
          //   props.allRecipes,
          //   'comida',
          // );
        }}
      >
        Foods
      </button>
      <button
        data-testid="filter-by-drink-btn"
        className={'button-category-filter'}
        onClick={() => {
          setFilterFavorites('bebida');
          // filterByType(
          //   props.hasChosen,
          //   props.setHasChosen,
          //   props.allRecipes,
          //   'bebida',
          // );
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
