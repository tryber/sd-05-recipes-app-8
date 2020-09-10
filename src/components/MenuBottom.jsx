import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBottom.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

const MenuBottom = () => (
  <footer className="menu-bottom" data-testid="footer">
    <Link to="/bebidas">
      <img
        src={drinkIcon}
        alt="Drinks"
        className="drink-icon icon-bottom"
        data-testid="drinks-bottom-btn"
      />
    </Link>
    <Link to="/explorar">
      <img
        src={exploreIcon}
        alt="Explore"
        className="explore-icon icon-bottom"
        data-testid="explore-bottom-btn"
      />
    </Link>
    <Link to="/comidas">
      <img
        src={mealIcon}
        alt="Meals"
        className="meal-icon icon-bottom"
        data-testid="food-bottom-btn"
      />
    </Link>
  </footer>
);

export default MenuBottom;