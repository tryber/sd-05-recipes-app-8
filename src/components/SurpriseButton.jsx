import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/ExplorerButton.css';

const ExplorerButton = () => {
  const { idRecipe } = useContext(RecipesContext);
  const recipeType = window.location.pathname.split('/')[2];

  return (
    <Link to={`/${recipeType}/${idRecipe}`} className="explorer-button">
      <button data-testid="explore-surprise">
        <span className="explorer-button-label">Me Surpreenda!</span>
      </button>
    </Link>
  );
};

export default ExplorerButton;
