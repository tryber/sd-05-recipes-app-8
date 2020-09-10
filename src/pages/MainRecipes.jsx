import React from 'react';
import { BtnCard, Header, ProfileIcon, SearchIcon, MenuBottom } from '../components';
import Card from '../layouts/Card';

const headerMainRecipes = {
  left: <ProfileIcon />,
  center: 'Comidas',
  right: <SearchIcon />,
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

const detailsProps = {
  direction: '/comidas/52882',
  value: 'Detalhes',
};

const MainRecipes = () => (
  <Card>
    <Header {...headerMainRecipes} />
    <BtnCard {...detailsProps} />
    <BtnCard {...logoutProps} />
    {/* <BtnCard {...exploreProps} /> */}
    <MenuBottom />
  </Card>
);

export default MainRecipes;
