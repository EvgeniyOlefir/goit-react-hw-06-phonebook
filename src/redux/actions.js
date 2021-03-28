import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
