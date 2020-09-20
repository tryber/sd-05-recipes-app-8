import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainContent,
  FilterList,
  SearchBar,
  Card,
} from '../components';
import { fetchMeals } from '../services/mealAPI.js';
import { fetchDrinks } from '../services/drinkAPI.js';

const MainRecipes = () => {
  const {
    categorySelected,
    fetchKyleMenu,
    typeRecipe,
    setTypeRecipe,
    showSearchBar,
    recipesRoster,
  } = useContext(RecipesContext);
  const headerMainRecipes = {
    left: <ProfileIcon />,
    center: typeRecipe,
    right: <SearchIcon />,
    // id: 'page-title',
  };
  const url = window.location.href.split('/');
  const urlType = url.reverse()[0];
  useEffect(() => {
    setTypeRecipe(urlType);
    let apiCall = fetchMeals;
    if (urlType === 'bebidas') {
      apiCall = fetchDrinks;
    }
    fetchKyleMenu(apiCall, urlType, categorySelected);
    // const searchTail = 'search.php?s=';
    // fetchMenu(urlType, searchTail);
  }, [typeRecipe, categorySelected]);

  if (recipesRoster.length === 1) {
    const getId = `id${urlType === 'comidas' ? 'Meal' : 'Drink'}`;
    console.log(getId, recipesRoster);
    return (<Redirect to={`/${urlType}/${recipesRoster[0][getId]}`} />);
  }

  return (
    <Card>
      <Header {...headerMainRecipes} />
      {showSearchBar && <SearchBar />}
      {!showSearchBar && <FilterList />}
      <MainContent />
      <MenuBottom />
    </Card>
  );
};

export default MainRecipes;
