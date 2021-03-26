import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer, composeWithDevTools());

export default store;
