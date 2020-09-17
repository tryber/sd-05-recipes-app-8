import React, { useState, useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const saveFavorite = (receipt, types, heartIcon, setFavIcon) =>
  Object.values(receipt[types[1]][0])[0] ===
  Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')))[0]
    ? (setFavIcon(whiteHeartIcon), localStorage.setItem('favoriteRecipes', JSON.stringify([])))
    : (setFavIcon(blackHeartIcon),
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(Object.values(receipt[types[1]][0]).slice(0, 4)),
      ));

const FavoriteIcon = ({ recipe, keys }) => {
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
      setFavIcon(whiteHeartIcon);
    } else
      Object.values(recipe[keys[1]][0])[0] ===
      Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')))[0]
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
