import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import reducer, {initialState} from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleware = applyMiddleware(
//   save(), // Saving done here
// )(createStore);


// const store = createStoreWithMiddleware(
//   reducer,
//   load({ preloadedState:initialState }), // Loading done here
//   composeEnhancers(),
// );

// export default store;


const store = createStore(reducer,composeEnhancers())
export default store
