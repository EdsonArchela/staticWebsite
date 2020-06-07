import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Articles from '../pages/Articles';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/articles/:slug" component={Articles} />
  </Switch>
);

export default Routes;
