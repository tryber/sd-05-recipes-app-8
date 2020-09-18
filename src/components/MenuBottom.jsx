import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/MenuBottom.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import { RecipesContext } from '../context/RecipesContext';

function clearFilter(setCategorySelected) {
  // const { setCategorySelected } = useContext(RecipesContext);
  setCategorySelected(() => '');
};

const MenuBottom = () => {
  const { setTypeRecipe, setCategorySelected, setKeys } = useContext(RecipesContext);
  return (
    <footer className="menu-bottom" data-testid="footer">
      <Link
        onClick={() => {
          clearFilter(setCategorySelected);
          setKeys(['cocktail', 'drinks', 'strDrink', 'strDrinkThumb']);
          setTypeRecipe('bebidas');
        }}
        to="/bebidas"
      >
        <img
          src={drinkIcon}
          alt="Drinks"
          className="drink-icon icon-bottom"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar" onClick={() => clearFilter(setCategorySelected)}>
        <img
          src={exploreIcon}
          alt="Explore"
          className="explore-icon icon-bottom"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="/comidas"
        onClick={() => {
          clearFilter(setCategorySelected);
          setKeys(['meal', 'meals', 'strMeal', 'strMealThumb']);
          setTypeRecipe('comidas');
        }}
      >
        <img
          src={mealIcon}
          alt="Meals"
          className="meal-icon icon-bottom"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
};

export default MenuBottom;
