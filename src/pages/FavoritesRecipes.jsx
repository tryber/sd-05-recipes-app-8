import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Header, ProfileIcon, Card, Finished, FilterButtons } from '../components';
import { RecipesContext } from '../context/RecipesContext';
import { favorite, getLocalStorage, saveLocalStorage } from '../helper/LocalStorageHandler';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

const FavoritesRecipes = () => {
  const allRecipes = getLocalStorage();
  const [hasChosen, setHasChosen] = useState(getLocalStorage());
  const {filterFavorites, setFilterFavorites} = useContext(RecipesContext);

  return (
    <Card>
      {/* {!hasChosen && saveLocalStorage(favorite, [])} */}
      <Header {...headerFavoriteRecipes} />
      <FilterButtons allRecipes={allRecipes} hasChosen={hasChosen} setHasChosen={setHasChosen} />
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
