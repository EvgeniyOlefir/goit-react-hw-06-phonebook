import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './phonebook-reducer';

const rootReducer = combineReducers({
  phonebook: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
