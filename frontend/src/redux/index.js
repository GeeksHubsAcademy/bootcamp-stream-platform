import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
  save(), // Saving done here
)(createStore);


const store = createStoreWithMiddleware(
  reducer,
  load(), // Loading done here
    composeEnhancers(),
);

export default store;
