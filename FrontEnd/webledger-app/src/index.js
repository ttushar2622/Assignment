import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react'; 

import store from './components/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </Router>
  </Provider>
);


reportWebVitals();
