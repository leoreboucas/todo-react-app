import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';

import reducers from './main/reducers/reducers'

import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);
