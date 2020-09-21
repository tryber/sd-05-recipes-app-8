import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/ExplorerButton.css';

const ExplorerButton = (props) => {
  const { idRecipe } = useContext(RecipesContext);
  const recipeType = window.location.pathname.split('/')[2];

  return (
    <Link
      to={`/${recipeType}/${idRecipe}`}
      className="explorer-button"
    >
    <button
      data-testid="explore-surprise"
    >
      <span className="explorer-button-label">Me Surpreenda</span>
    </button>
    </Link>
  );
};

ExplorerButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  pathTo: PropTypes.string.isRequired,
};

export default ExplorerButton;
