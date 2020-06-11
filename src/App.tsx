import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  // <Router basename={process.env.PUBLIC_URL}>
  <HashRouter>
    <GlobalStyle />
    <AppProvider>
      <Routes />
    </AppProvider>
  </HashRouter>
);

export default App;
