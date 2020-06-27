import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import ReactGa from 'react-ga';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  useEffect(() => {
    ReactGa.initialize('UA-33652069-2');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </HashRouter>
  );
};
export default App;
