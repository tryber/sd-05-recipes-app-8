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

import { fetchCategories } from '../services/mealAPI';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  id: 'page-title',
};

// const logoutProps = {
//   direction: '/',
//   value: 'Sair',
// };

// const exploreProps = {
//   direction: '/explorar',
//   value: 'Explorar',
//   id: 'explore-bottom-btn',
// };

const MainRecipes = () => {
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
