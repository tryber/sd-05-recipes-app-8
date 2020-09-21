import React, { useContext, useEffect } from 'react';
import { BtnCard, Header, ProfileIcon, MenuBottom } from '../components';
import Card from '../components/Card';
import { RecipesContext } from '../context/RecipesContext';

const headerIngredients = {
  left: <ProfileIcon />,
  center: 'Explorar Ingredientes',
};
const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const ExploreByIngredients = () => {
  const {} = useContext(RecipesContext);

  return (
  <Card>
    <Header {...headerIngredients} />
    <BtnCard {...logoutProps} />
    <MenuBottom />
  </Card>
);}

export default ExploreByIngredients;
