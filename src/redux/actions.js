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

const changeFilter = value => ({
  type: types.filterChange,
  payload: value,
});

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
