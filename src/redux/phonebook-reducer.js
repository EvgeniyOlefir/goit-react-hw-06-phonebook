import { combineReducers } from 'redux';
import types from './types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.addContact:
      return [...state, payload];
    case types.deleteContact:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
