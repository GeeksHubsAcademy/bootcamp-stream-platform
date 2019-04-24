import { createStore , compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
const store = createStore(reducer, composeEnhancers() );

export default store;
