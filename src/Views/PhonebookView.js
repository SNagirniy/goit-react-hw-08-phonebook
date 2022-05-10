import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import { fetchContacts } from 'Redux/Contacts';

export default function PhonebookView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
