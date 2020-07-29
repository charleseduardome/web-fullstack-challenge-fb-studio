import React from 'react';

import { QuestionProvider } from './question';

const AppProvider: React.FC = ({ children }) => (
  <QuestionProvider>{children}</QuestionProvider>
);

export default AppProvider;
