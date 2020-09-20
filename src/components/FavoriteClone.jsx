import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
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

const FavoriteClone = (favRecipe) => {
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  console.log(favRecipe);
  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else if (Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))).length === 0) {
      setFavIcon(whiteHeartIcon);
    } else if (
      [favRecipe][0].id === Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))[0])[0]
    ) {
      setFavIcon(blackHeartIcon);
    } else setFavIcon(whiteHeartIcon);
  }, [favRecipe]);

  return (
    <figure>
      <button onClick={() => saveFavorite(favIcon, setFavIcon, favRecipe)}>
        <img data-testid="favorite-btn" src={favIcon} alt="favoriteIcon" />
      </button>
    </figure>
  );
};

export default FavoriteClone;

// FavoriteClone.propTypes = {
//   favRecipe: PropTypes.node.isRequired,
//   keys: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
