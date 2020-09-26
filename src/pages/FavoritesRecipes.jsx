import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, ProfileIcon, Card, Finished, FilterButtons } from '../components';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

const FavoritesRecipes = () => {
  const allRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [hasChosen, setHasChosen] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')));

  return (
    <Card>
      {!hasChosen && localStorage.setItem('favoriteRecipes', JSON.stringify([]))}
      <Header {...headerFavoriteRecipes} />
      {hasChosen && (
        <FilterButtons allRecipes={allRecipes} hasChosen={hasChosen} setHasChosen={setHasChosen} />
      )}
      <Finished listRecipes={hasChosen} />
    </Card>
  );
};

export default FavoritesRecipes;

FavoritesRecipes.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasChosen: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHasChosen: PropTypes.func.isRequired,
};
