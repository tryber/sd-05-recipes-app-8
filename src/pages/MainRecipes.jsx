import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainContent,
  FilterList,
} from '../components';
import Card from '../components/Card';

const headerMealsRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  id: 'page-title',
};

const MealsRecipes = () => {
  const { fetchMenu, typeRecipe, setTypeRecipe } = useContext(RecipesContext);

  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[0];
    setTypeRecipe(urlType);
    const searchTail = 'search.php?s=';
    fetchMenu(urlType, searchTail);
  }, [typeRecipe]);

  return (
    <Card>
      <Header {...headerMealsRecipes} />
      <FilterList />
      <MainContent />
      <MenuBottom />
    </Card>
  );
};

export default MealsRecipes;
