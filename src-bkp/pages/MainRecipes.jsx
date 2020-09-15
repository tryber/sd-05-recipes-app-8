import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainFoodContent,
  FilterList,
  SearchBar,
} from '../components';

import { fetchCategories, fetchMeals } from '../services/mealAPI';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  searchBar: <SearchBar />,
  id: 'page-title',
};

const MainRecipes = () => {
  const { setCategories, setRecipesList, categories } = useContext(RecipesContext);

  const getCategories = () => {
    fetchCategories().then(({ meals }) =>
      setCategories((current) => ({
        ...current,
        catList: ['All', ...meals.slice(0, 5).map((meal) => meal.strCategory)],
      })),
    );
  };

  const getRecipes = () =>
    fetchMeals(categories.choose).then(({ meals }) => setRecipesList([...meals.slice(0, 12)]));

  useEffect(() => {
    getCategories();
    getRecipes();
  }, [categories]);

  const { setCategories } = useContext(RecipesContext);
  useEffect(
    () =>
      fetchCategories().then(({ meals }) =>
        setCategories((current) => ({
          ...current,
          catList: [
            'All',
            ...meals.slice(0, 5).map((meal) => meal.strCategory),
          ],
        })),
      ),
    [],
  );
  return (
    <Card>
      <Header {...headerMainRecipes} />
      <FilterList />
      <MainFoodContent />
      <MenuBottom />
    </Card>
  );
};

export default MainRecipes;