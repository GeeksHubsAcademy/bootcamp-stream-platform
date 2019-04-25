import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
  composeEnhancers(applyMiddleware(save()))
  )
export default store;
