import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case [actions.changeFilter]:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
