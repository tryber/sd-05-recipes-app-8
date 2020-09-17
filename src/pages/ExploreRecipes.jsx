import React, { Component, useContext } from 'react';
import Card from '../components/Card';
import {
  ProfileIcon,
  Header,
  BtnCard,
  MainContents,
  ExplorerButton,
  MenuBottom,
} from '../components';
import { RecipesContext } from '../context/RecipesContext';
import './Explorer.css';

const surpriseMe = {
  testId: 'explore-surprise',
  label: 'Me surpreenda',
};

class ExploreRecipes extends Component {
  // const { typeRecipe } = useContext(RecipesContext);
  render() {
    const { location: { pathname } } = this.props;
    const recipeType = (pathname === '/explorar/comidas'? 'comidas' : 'bebidas');
    const headerExplorer = {
      left: <ProfileIcon />,
    center: `Explorar ${recipeType}`,
  };
  const searchByIngredient = {
    testId: 'explore-by-ingredient',
    pathTo: `${recipeType}/ingredientes`,
    label: 'Por Ingredientes',
  };
  const searchByArea = {
    testId: 'explore-by-area',
    label: 'Por Local de Origem',
    pathTo: `${recipeType}/area`,
  };
  return (
    // <Card>
    <div>
      <Header {...headerExplorer} />
      <MainContents>
        <ExplorerButton {...searchByIngredient} />
        {pathname === '/explorar/comidas' && <ExplorerButton {...searchByArea} />}
        <ExplorerButton {...surpriseMe} />
      </MainContents>
      <MenuBottom />
    </div>
    // </Card>
    );
  }
};

export default ExploreRecipes;
