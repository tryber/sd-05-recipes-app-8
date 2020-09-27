import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  getLocalStorage,
  saveLocalStorage,
  favorite,
} from '../helper/LocalStorageHandler';

const saveFavorite = (favRecipe) => {
  let favRecipes = [];
  if (getLocalStorage(favorite)) {
    favRecipes = [...getLocalStorage(favorite)];
  }

  if (favRecipe.favorite && !favRecipes.find(({ id }) => id === favRecipe.id)) {
    favRecipes.push(favRecipe);
  } else if (favRecipes.find(({ id }) => id === favRecipe.id)) {
    favRecipes = favRecipes.filter(({ id }) => id !== favRecipe.id);
  }
  saveLocalStorage(favorite, favRecipes);
};

const FavoriteClone = (props) => {
  const [receipt2, setReceipt2] = useState({
    id: props.recipe[props.keys[1]][0][props.keys[4]],
    type: props.keys[5],
    area: props.recipe[props.keys[1]][0].strArea || '',
    category: props.recipe[props.keys[1]][0].strCategory || '',
    alcoholicOrNot: props.recipe[props.keys[1]][0].strAlcoholic || '',
    name: props.recipe[props.keys[1]][0][props.keys[2]],
    image: props.recipe[props.keys[1]][0][props.keys[3]],
    favorite: false,
  });
  useEffect(() => {}, [receipt2]);

  return (
    <figure>
      <button
        onClick={() => {
          const togRecipe = { ...receipt2, favorite: !receipt2.favorite };
          setReceipt2(togRecipe);
          saveFavorite(togRecipe);
        }}
      >
        <img
          data-testid={props.favId}
          src={
            getLocalStorage(favorite).find(({ id }) => id === receipt2.id)
              ? blackHeartIcon
              : whiteHeartIcon
          }
          alt="favoriteIcon"
        />
      </button>
    </figure>
  );
};

export default FavoriteClone;

FavoriteClone.propTypes = {
  recipe: PropTypes.node.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  favId: PropTypes.string.isRequired,
};
