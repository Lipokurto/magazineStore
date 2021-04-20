import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore} from 'redux'

import goodsReducer from './reducers/goodsReducer';

import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle.min';

// создаем store и подулючаем расширение для devTools
const myStore = createStore(goodsReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

