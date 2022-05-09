import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.filter.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const checkContact = (contacts, name) => {
  return contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};

const contactsSelectors = {
  getAllContacts,
  getLoading,
  getFilter,
  checkContact,
  getVisibleContacts,
};
export default contactsSelectors;
