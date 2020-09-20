// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

// const saveFavorite = (recipe, keys, heartIcon, setFavIcon, favRecipe) => {
//   const recipeChoose = Object.values(recipe[keys[1]][0])[0];
//   const recipeStored = Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')));
//   const setFavourite = () => {
//     setFavIcon(blackHeartIcon);
//     localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipe));
//   };
//   const unsetFavourite = () => {
//     setFavIcon(whiteHeartIcon);
//     localStorage.setItem('favoriteRecipes', JSON.stringify([]));
//   };
//   if (recipeStored.length === 0) return setFavourite();
//   return recipeChoose
// === Object.values(JSON.parse(localStorage.getItem('favoriteRecipes')))[0].id
//     ? unsetFavourite()
//     : setFavourite();
// };

// const FavoriteIcon = ({ recipe, keys }) => {
//   const [favIcon, setFavIcon] = useState(whiteHeartIcon);
//   const favRecipe = [
//     {
//       id: recipe[keys[1]][0][keys[4]],
//       type: keys[5],
//       area: recipe[keys[1]][0].strArea || '',
//       category: recipe[keys[1]][0].strCategory || '',
//       alcoholicOrNot: recipe[keys[1]][0].strAlcoholic || '',
//       name: recipe[keys[1]][0][keys[2]],
//       image: recipe[keys[1]][0][keys[3]],
//     },
//   ];
//   useEffect(() => {
//     if (!localStorage.getItem('favoriteRecipes')) {
//       localStorage.setItem('favoriteRecipes', JSON.stringify([]));
//     } else if (Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))).length === 0) {
//       setFavIcon(whiteHeartIcon);
//     } else if (
//       Object.values(recipe[keys[1]][0])[0] ===
//       Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))[0])[0]
//     ) {
//       setFavIcon(blackHeartIcon);
//     } else setFavIcon(whiteHeartIcon);
//   }, [recipe]);

//   return (
//     <figure>
//       <button onClick={() => saveFavorite(recipe, keys, favIcon, setFavIcon, favRecipe)}>
//         <img data-testid="favorite-btn" src={favIcon} alt="favoriteIcon" />
//       </button>
//     </figure>
//   );
// };

// export default FavoriteIcon;

// FavoriteIcon.propTypes = {
//   recipe: PropTypes.node.isRequired,
//   keys: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
