import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Companies, Home, Unity } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/companies" component={Companies} exact />
      <Route path="/units" component={Unity} exact />
    </Switch>
  );
};

export default Routes;
