import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const labelButton = (typeRecipe, idRecipe, value) => {
  if (localStorage.getItem('inProgressRecipes')) {
    return Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes'))[typeRecipe])[0] !==
      idRecipe
      ? value[0]
      : value[1];
  }
  return value[0];
};

const setStorage = (attribute, idMenu, receipt) =>
  localStorage.setItem('inProgressRecipes', JSON.stringify({ [attribute]: { [idMenu]: receipt } }));

const BtnCard = (props) => {
  const { typeRecipe, idRecipe, idTag, value, recipe, keyword } = props;

  return (
    <Link to={`/${typeRecipe}/${idRecipe}/in-progress`}>
      <button
        data-testid={idTag}
        className="btnBottom"
        onClick={() => {
          setStorage(typeRecipe, idRecipe, findIngredients(recipe, keyword));
        }}
      >
        {value[0]}
        {/* {labelButton(typeRecipe, idRecipe, value)} */}
      </button>
    </Link>
  );
};

export default BtnCard;

BtnCard.propTypes = {
  typeRecipe: PropTypes.string.isRequired,
  idRecipe: PropTypes.string.isRequired,
  idTag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  recipe: PropTypes.node.isRequired,
  keyword: PropTypes.node.isRequired,
};
