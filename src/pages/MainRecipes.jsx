import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { BtnCard, Header, ProfileIcon, SearchIcon, MenuBottom, SearchBar, FilterCard } from '../components';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
  searchBar: <SearchBar />,
  id: 'page-title',
};

const headerMainRecipesDrinks = {
  left: <ProfileIcon />,
  center: 'Drinks',
  right: <SearchIcon />,
  searchBar: <SearchBar />,
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

// const exploreProps = {
//   direction: '/explorar',
//   value: 'Explorar',
//   id: 'explore-bottom-btn',
// };

export const MainRecipes = () => {
  const { typeRecipe, recipe, fetchRecipeDetails } = useContext(RecipesContext);
  const type = typeRecipe === 'comidas' ? 'meal' : 'cocktail';
  const id = typeRecipe === 'comidas' ? '52771' : '178319';

  useEffect(() => {
    fetchRecipeDetails(type, id);
  }, [type]);

  const headerMainRecipes = {
    left: <ProfileIcon />,
    center: typeRecipe,
    right: <SearchIcon />,
    id: 'page-title',
  };
  const detailsProps = {
    direction: type === 'comidas' ? '/comidas/52882' : '/bebidas/178319',
    value: 'Detalhes',
  };

  return (
    <Card>
      <Header {...headerMainRecipes} />
      <BtnCard {...detailsProps} />
      <BtnCard {...logoutProps} />
      <FilterCard />
      <MenuBottom />
    </Card>
  );
};

export const MainRecipesDrinks = () => (
  <Card>
    <Header {...headerMainRecipesDrinks} />
    <FilterCard />
    <MenuBottom />
  </Card>
);
