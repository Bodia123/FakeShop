//npm
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// components
import App from 'components/App/App';
//
import 'styles/index.css';
import { store } from 'Features/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/FakeShop">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
