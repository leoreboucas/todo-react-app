import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';

import reducers from './main/reducers/reducers'

import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'

import { Provider } from 'react-redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);
