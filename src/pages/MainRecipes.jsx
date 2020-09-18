import React, { useEffect, useContext } from 'react';
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
import { fetchMeals } from '../services/mealAPI.js'
import { fetchDrinks } from '../services/drinkAPI.js'

const MainRecipes = () => {
  const { categorySelected, fetchKyleMenu, typeRecipe, setTypeRecipe, showSearchBar, setRecipesList } = useContext(RecipesContext);
  const headerMainRecipes = {
    left: <ProfileIcon />,
    center: typeRecipe,
    right: <SearchIcon />,
    id: 'page-title',
  };
  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[0];
    setTypeRecipe(urlType);
    let apiCall = fetchMeals;
    if (urlType === 'bebidas') {
      apiCall = fetchDrinks;
    }
    fetchKyleMenu(apiCall, urlType, categorySelected); 

    // const searchTail = 'search.php?s=';
    // fetchMenu(urlType, searchTail);

  }, [typeRecipe, categorySelected]);

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
