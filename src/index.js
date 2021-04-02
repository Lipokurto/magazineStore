import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/indexReducer';


const myStore = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

