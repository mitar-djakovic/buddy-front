import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import { store } from './store';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </Router>
    </Provider>
  );
};

export default App;
