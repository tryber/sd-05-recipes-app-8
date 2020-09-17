import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ProfileIcon,
  Header,
  MainContents,
  ExplorerButton,
  MenuBottom,
} from '../components';
import '../layouts/Explorer.css';

const surpriseMe = {
  testId: 'explore-surprise',
  label: 'Me surpreenda',
};

class ExploreRecipes extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;
    const recipeType = pathname === '/explorar/comidas' ? 'comidas' : 'bebidas';
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
      <div>
        <Header {...headerExplorer} />
        <MainContents>
          <ExplorerButton {...searchByIngredient} />
          {pathname === '/explorar/comidas' && (
            <ExplorerButton {...searchByArea} />
          )}
          <ExplorerButton {...surpriseMe} />
        </MainContents>
        <MenuBottom />
      </div>
    );
  }
}

export default ExploreRecipes;

ExploreRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
