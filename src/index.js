import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers';
import App from './App'


const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTension__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// add imports and code


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
