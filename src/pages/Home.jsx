import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, MainRecipes, Profile, FavoritesRecipes, DoneRecipes } from './';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas" component={MainRecipes} />
      <Route exact path="/receitas-favoritas" component={FavoritesRecipes} />
      <Route exact path="/receitas-feitas" component={DoneRecipes} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  </Router>
);

export default Home;
