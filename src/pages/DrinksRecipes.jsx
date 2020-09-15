import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import {
  Header,
  ProfileIcon,
  SearchIcon,
  MenuBottom,
  MainDrinkContent,
  FilterList,
} from '../components';

import { fetchCategories, fetchDrinks } from '../services/drinkAPI';
import Card from '../layouts/Card';

const headerMealsRecipes = {
  left: <ProfileIcon />,
  center: 'Bebidas',
  right: <SearchIcon />,
  id: 'page-title',
};

const DrinksRecipes = () => {
  const { setCategories, setRecipesList, categories } = useContext(RecipesContext);

  const getCategories = () => {
    fetchCategories().then(({ drinks }) =>
      setCategories((current) => ({
        ...current,
        catList: ['All', ...drinks.slice(0, 5).map((drink) => drink.strCategory)],
      })),
    );
  };

  const getRecipes = () => {
    const filterCategory = categories.choose === 'all' ? '' : categories.choose;
    fetchDrinks(filterCategory).then(({ drinks }) => setRecipesList([...drinks.slice(0, 12)]));
  };

  useEffect(() => {
    getCategories();
    getRecipes();
  }, [categories]);

  return (
    <Card>
      <Header {...headerMealsRecipes} />
      <FilterList />
      <MainDrinkContent />
      <MenuBottom />
    </Card>
  );
};
// test pushing
export default DrinksRecipes;
