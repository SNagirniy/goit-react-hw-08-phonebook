import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import { contactOperations, contactsSelectors } from 'Redux/Contacts';

export default function PhonebookView(params) {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactOperations.fetchContacts), [dispatch]);

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contactlist />
      </Section>
    </Container>
  );
}
