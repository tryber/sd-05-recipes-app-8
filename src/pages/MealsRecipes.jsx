import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainFoodContent,
  FilterList,
} from '../components';

import { fetchCategories, fetchMeals } from '../services/mealAPI';
import Card from '../layouts/Card';

const headerMealsRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  id: 'page-title',
};

const MealsRecipes = () => {
  const { setCategories, setRecipesList, categories } = useContext(RecipesContext);

  const getCategories = () => {
    fetchCategories().then(({ meals }) =>
      setCategories((current) => ({
        ...current,
        catList: ['All', ...meals.slice(0, 5).map((meal) => meal.strCategory)],
      })),
    );
  };

  const getRecipes = () => {
    const filterCategory = categories.choose === 'all' ? '' : categories.choose;
    fetchMeals(filterCategory).then(({ meals }) => setRecipesList([...meals.slice(0, 12)]));
  };

  useEffect(() => {
    getCategories();
    getRecipes();
  }, [categories]);

  return (
    <Card>
      <Header {...headerMealsRecipes} />
      <FilterList />
      <MainFoodContent />
      <MenuBottom />
    </Card>
  );
};

export default MealsRecipes;
