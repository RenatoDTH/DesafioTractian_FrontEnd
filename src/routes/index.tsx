import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Companies, Home } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/companies" component={Companies} exact />
    </Switch>
  );
};

export default Routes;
