import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { BtnCard, Header, ProfileIcon, SearchIcon, MenuBottom } from '../components';
import Card from '../layouts/Card';

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

// const exploreProps = {
//   direction: '/explorar',
//   value: 'Explorar',
//   id: 'explore-bottom-btn',
// };

const MainRecipes = () => {
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
      {console.log(recipe)}
      <Header {...headerMainRecipes} />
      <BtnCard {...detailsProps} />
      <BtnCard {...logoutProps} />
      <MenuBottom />
    </Card>
  );
};

export default MainRecipes;
