import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import DashboardQuestions from '../pages/DashboardQuestions';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DashboardQuestions} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
