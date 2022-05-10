export const getItems = state => state.contacts;
export const getFilter = state => state.filter.filter;

export const getVisibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const checkContact = (contacts, name) => {
  return contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};


