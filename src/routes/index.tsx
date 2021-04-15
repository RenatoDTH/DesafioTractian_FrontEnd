import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Companies, Home, Unity, Assets } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/companies" component={Companies} />
      <Route path="/units" component={Unity} />
      <Route path="/assets" component={Assets} />
    </Switch>
  );
};

export default Routes;
