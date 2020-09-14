import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login,
  MainRecipes,
  MainRecipesDrinks,
  Explorer,
  ExploreRecipes,
  Profile,
  FavoritesRecipes,
  DoneRecipes,
  ExploreByIngredients,
} from './';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas" component={MainRecipes} />
      <Route exact path="/bebidas" component={MainRecipesDrinks} />
      <Route exact path="/explorar" component={Explorer} />
      <Route exact path="/explorar/comidas" component={ExploreRecipes} />
      <Route exact path="/explorar/bebidas" component={ExploreRecipes} />
      <Route exact path="/explorar/comidas/ingredientes" component={ExploreByIngredients} />
      <Route exact path="/explorar/bebidas/ingredientes" component={ExploreByIngredients} />
      <Route exact path="/receitas-favoritas" component={FavoritesRecipes} />
      <Route exact path="/receitas-feitas" component={DoneRecipes} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  </Router>
);

export default Home;
