import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/MenuBottom.css';

const findIngredients = (receipt, types) => {
  if (types === 'meals') {
    return Object.values(receipt[types][0])
      .slice(9, 29)
      .filter((value) => value !== null && value !== '');
  }
  return Object.values(receipt[types][0])
    .slice(21, 36)
    .filter((value) => value !== null && value !== '');
};

const setStorage = (attribute, idMenu, receipt) =>
  localStorage.setItem('inProgressRecipes', JSON.stringify({ [attribute]: { [idMenu]: receipt } }));

const BtnCard = (props) => {
  const { typeRecipe, idRecipe, idTag, value, recipe, keyword } = props;
  //   console.log(JSON.parse(localStorage.getItem('inProgressRecipes'))[typeRecipe][idRecipe]);
  return (
    <Link to={`/${typeRecipe}/${idRecipe}/in-progress`}>
      <button
        data-testid={idTag}
        className="btnBottom"
        onClick={() => {
          setStorage(typeRecipe, idRecipe, findIngredients(recipe, keyword));
        }}
      >
        {value}
        {/* {JSON.parse(localStorage.getItem('inProgressRecipes'))[typeRecipe] !== idRecipe
          ? value[0]
          : value[1]} */}
      </button>
    </Link>
  );
};

export default BtnCard;

BtnCard.propTypes = {
  direction: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  details: PropTypes.bool.isRequired,
};
