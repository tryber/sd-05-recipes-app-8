import React from 'react';
import { ProfileIcon, Header, MenuBottom } from '../components';
import ExplorerButton from '../components/ExplorerButton';
import MainContent from '../components/MainContents';
import '../layouts/Explorer.css';

const headerExplorer = {
  left: <ProfileIcon />,
  center: 'Explorar',
};

const exploreFood = {
  label: 'Explorar Comidas',
  pathTo: 'comidas',
  testId: 'explore-food',
};

const exploreDrinks = {
  label: 'Explorar Bebidas',
  pathTo: 'bebidas',
  testId: 'explore-drinks',
};

const Explorer = () => (
  <div>
    <Header {...headerExplorer} />
    <MainContent>
      <ExplorerButton {...exploreFood} key={exploreFood.testId} />
      <ExplorerButton {...exploreDrinks} key={exploreDrinks.testId} />
    </MainContent>
    <MenuBottom />
  </div>
);

export default Explorer;
