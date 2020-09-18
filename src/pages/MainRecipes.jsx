import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainContent,
  FilterList,
  Card,
} from '../components';

const MainRecipes = () => {
  const { fetchMenu, typeRecipe, setTypeRecipe } = useContext(RecipesContext);
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
    const searchTail = 'search.php?s=';
    fetchMenu(urlType, searchTail);
  }, [typeRecipe]);

  return (
    <Card>
      <Header {...headerMainRecipes} />
      <FilterList />
      <MainContent />
      <MenuBottom />
    </Card>
  );
};

export default MainRecipes;
