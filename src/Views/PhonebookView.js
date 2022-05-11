import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import { fetchContacts } from 'Redux/Contacts';
import { ContactsSelectors } from 'Redux/Contacts';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function PhonebookView() {
  const contacts = useSelector(ContactsSelectors.getItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length > 0 ? (
            <>
              <Filter />
              <Contactlist />
            </>
          ) : (
            <Notification text={'There are no any contacts in phonebook...'} />
          )}
        </Section>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <ToastContainer />
    </>
  );
}
