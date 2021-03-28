import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

console.log(getDefaultMiddleware());

const store = configureStore({
  reducer: {
    phonebook: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
