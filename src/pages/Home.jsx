import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, MainRecipes } from './';

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainRecipes} />
      </Switch>
    </Router>
  );
};

export default Home;
