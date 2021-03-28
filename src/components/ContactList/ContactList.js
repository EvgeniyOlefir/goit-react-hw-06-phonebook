import { v4 as uuidv4 } from 'uuid';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={uuidv4()}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  handleDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
