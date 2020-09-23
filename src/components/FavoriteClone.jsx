import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const saveFavorite = (heartIcon, setFavIcon, favRecipe) => {
  const recipeChoose = [favRecipe][0].id;
  const recipeStored = Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')));
  const setFavourite = () => {
    setFavIcon(blackHeartIcon);
    localStorage.setItem('favoriteRecipes', JSON.stringify([favRecipe]));
  };
  const unsetFavourite = () => {
    setFavIcon(whiteHeartIcon);
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  };
  if (recipeStored.length === 0) return setFavourite();
  return recipeChoose === Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')))[0].id
    ? unsetFavourite()
    : setFavourite();
};

const FavoriteClone = (props) => {
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  const receipt = {
    id: props.recipe[props.keys[1]][0][props.keys[4]],
    type: props.keys[5],
    area: props.recipe[props.keys[1]][0].strArea || '',
    category: props.recipe[props.keys[1]][0].strCategory || '',
    alcoholicOrNot: props.recipe[props.keys[1]][0].strAlcoholic || '',
    name: props.recipe[props.keys[1]][0][props.keys[2]],
    image: props.recipe[props.keys[1]][0][props.keys[3]],
  };
  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else if (Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))).length === 0) {
      setFavIcon(whiteHeartIcon);
    } else if (
      // [props.recipe][0].id ===
      receipt.id === Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))[0])[0]
    ) {
      setFavIcon(blackHeartIcon);
    } else setFavIcon(whiteHeartIcon);
  }, [props.recipe]);

  return (
    <figure>
      <button
        onClick={() => {
          saveFavorite(favIcon, setFavIcon, receipt);
          // window.location.reload();
        }}
      >
        <img data-testid={props.favId} src={favIcon} alt="favoriteIcon" />
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
