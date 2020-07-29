import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import DashboardQuestions from '../pages/DashboardQuestions';
import EditQuestion from '../pages/EditQuestion';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DashboardQuestions} />
      <Route path="/editquestion" exact component={EditQuestion} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
