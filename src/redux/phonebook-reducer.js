import { combineReducers } from 'redux';
import types from './types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.filterChange:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
