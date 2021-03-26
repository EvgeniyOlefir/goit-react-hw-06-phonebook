import { v4 as uuidv4 } from 'uuid';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, handleDeleteContact }) {
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
}
