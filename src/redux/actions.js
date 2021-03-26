import types from './types';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
  type: types.addContact,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.deleteContact,
  payload: contactId,
});

export default { addContact, deleteContact };
