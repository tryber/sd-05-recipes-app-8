import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const saveFavorite = (receipt, types, heartIcon, setFavIcon) => {
  const favRecipe = [
    {
      id: receipt[types[1]][0][types[4]],
      type: types[5],
      area: receipt[types[1]][0].strArea || '',
      category: receipt[types[1]][0].strCategory || '',
      alcoholicOrNot: receipt[types[1]][0].strAlcoholic || '',
      name: receipt[types[1]][0][types[2]],
      image: receipt[types[1]][0][types[3]],
    },
  ];
  return Object.values(receipt[types[1]][0])[0] ===
    Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')))[0]
    ? (setFavIcon(whiteHeartIcon), localStorage.setItem('favoriteRecipes', JSON.stringify([])))
    : (setFavIcon(blackHeartIcon),
      localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipe)));
};

const FavoriteIcon = ({ recipe, keys }) => {
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);

  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    return Object.values(recipe[keys[1]][0])[0] ===
      Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))[0])[0]
      ? setFavIcon(blackHeartIcon)
      : setFavIcon(whiteHeartIcon);
  }, [recipe]);

  return (
    <figure>
      <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
      <button onClick={() => saveFavorite(recipe, keys, favIcon, setFavIcon)}>
        <img data-testid="favorite-btn" src={favIcon} alt="favoriteIcon" />
      </button>
    </figure>
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  recipe: PropTypes.node.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
