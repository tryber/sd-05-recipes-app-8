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
  if (
    !localStorage.getItem('inProgressRecipes') ||
    !Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes')))[typeRecipe]
  ) {
    return value[0];
  }
  if (
    Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes'))[typeRecipe])[0] === idRecipe
  ) {
    return value[1];
  }
  return value[0];
};

const setStorage = (attribute, idMenu, receipt) => {
  let auxProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!auxProgress) {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ [attribute]: { [idMenu]: receipt } }),
    );
  } else if (!auxProgress[attribute]) {
    const auxDiff = { [attribute]: { [idMenu]: receipt } };
    auxProgress = Object.assign(auxProgress, auxDiff);
    localStorage.setItem('inProgressRecipes', JSON.stringify(auxProgress));
  } else {
    const auxReceipt = { [idMenu]: receipt };
    auxProgress[attribute] = Object.assign(auxProgress[attribute], auxReceipt);
    localStorage.setItem('inProgressRecipes', JSON.stringify(auxProgress));
  }
  //
};

const BtnStart = (props) => {
  const { typeRecipe, idRecipe, idTag, value, recipe, keyword } = props;
  const attribute = typeRecipe === 'comidas' ? 'meals' : 'cocktails';
  return (
    <Link to={`/${typeRecipe}/${idRecipe}/in-progress`}>
      <button
        data-testid={idTag}
        className="btnBottom"
        onClick={() => {
          setStorage(attribute, idRecipe, findIngredients(recipe, keyword));
        }}
      >
        {labelButton(attribute, idRecipe, value)}
      </button>
    </Link>
  );
};

export default BtnStart;

BtnStart.propTypes = {
  typeRecipe: PropTypes.string.isRequired,
  idRecipe: PropTypes.string.isRequired,
  idTag: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipe: PropTypes.node.isRequired,
  keyword: PropTypes.node.isRequired,
};
