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
  FilterCard,
} from '../components';
import { fetchMeals } from '../services/mealAPI.js';
import { fetchDrinks } from '../services/drinkAPI.js';

const MainRecipes = () => {
  const {
    categorySelected, fetchKyleMenu, typeRecipe,
    setTypeRecipe, showSearchBar, recipesRoster,
  } = useContext(RecipesContext);
  const { recipesFiltered } = useContext(RecipesContext);
  const headerMainRecipes = {
    left: <ProfileIcon />,
    center: typeRecipe,
    right: <SearchIcon />,
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
  }, [categorySelected]);

  if (recipesRoster.length === 1) {
    const getId = `id${urlType === 'comidas' ? 'Meal' : 'Drink'}`;
    return (<Redirect to={`/${urlType}/${recipesRoster[0][getId]}`} />);
  }

  return (
    <Card>
      <Header {...headerMainRecipes} />
      {showSearchBar && <SearchBar />}
      {!showSearchBar && <FilterList />}
      {recipesFiltered.length === 0 ? <MainContent /> : <FilterCard />}
      <MenuBottom />
    </Card>
  );
};

export default MainRecipes;
