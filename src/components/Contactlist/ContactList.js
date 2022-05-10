import React from 'react';
import ListItem from 'components/ListItem';
import { ContactsSelectors } from 'Redux/Contacts';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';

const ContactList = () => {
  const vsibleContacts = useSelector(ContactsSelectors.getVisibleContacts);

  return (
    <ul className={s.list}>
      {vsibleContacts.map(contact => (
        <ListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
