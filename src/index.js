import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store =createStore(manageUsers)


ReactDOM.render(
  <provider store={store}>
     <App />
  </provider>
  // add imports and code
 
  // add imports and code
  ,
  document.getElementById('root')
);
