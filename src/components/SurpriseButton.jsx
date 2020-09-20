import React, {
  // useContext,
  useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getRandomMeal } from '../services/mealAPI';
// import { getRandomDrink } from '../services/drinkAPI';
// import { RecipesContext } from '../context/RecipesContext';
import '../layouts/ExplorerButton.css';

const ExplorerButton = (props) => {
  // const { fetchKyleMenu, recipesRoster } = useContext(RecipesContext);
  const {
    label,
    // pathTo
  } = props;
  // const recipeId = pathTo === 'comidas' ? 'idMeal' : 'idDrink';
  // const apiCall = { 'comidas': getRandomMeal, 'bebidas': getRandomDrink,}
  // const redirectTo = `/${pathTo}/${recipesRoster[recipeId]}`;
  // let redirect = false;
  
  useEffect(() => {
    // fetchKyleMenu(apiCall[pathTo], '')
    // return () => redirect && console.log(
    //   `/${pathTo}/${recipesRoster[0][recipeId]}`
    //   // recipesRoster[0][recipeId]
    //   );
  },[])


  return (
    <Link
      onClick={() => {
      // console.log(`/${pathTo}/${recipesRoster[recipeId]}`);
      // redirect = true;
      // console.log(redirect);
      }}
      // to={`/${pathTo}/${recipesRoster[recipeId]}`}
      className="explorer-button"
      data-testid="explore-surprise"
    >
      <span className="explorer-button-label">{label}</span>
    </Link>
  );
};

ExplorerButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  pathTo: PropTypes.string.isRequired,
};

export default ExplorerButton;
