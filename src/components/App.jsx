import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Contact/Contact';

// const SAVED_CONTACTS = 'saved_contacts';

const PhoneBook = () => {
  //   const [contacts, setContacts] = useState([]);
  //   const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     const savedContacts = localStorage.getItem(SAVED_CONTACTS);
  //     if (savedContacts) {
  //       const parsedContacts = JSON.parse(savedContacts);
  //       if (parsedContacts.length > 0) {
  //         setContacts(parsedContacts);
  //       }
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem(SAVED_CONTACTS, JSON.stringify(contacts));
  //   }, [contacts]);

  //   const getValue = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'contacts':
  //         setContacts(value);
  //         break;
  //       case 'filter':
  //         setFilter(value);
  //         break;
  //       default:
  //         return;
  //     }
  //   };

  //   const createContact = (evt, name, number) => {
  //     evt.preventDefault();
  //     const contact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     if (checkInContacts(contact.name))
  //       return alert(`${contact.name} is already in contacts`);
  //     setContacts(prevState => [...prevState, contact]);
  //   };

  //   const checkInContacts = name => {
  //     return contacts.find(contact =>
  //       contact.name.toLowerCase().includes(name.toLowerCase())
  //     );
  //   };

  //   const filteredContacts = () => {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   };

  //   const removeContact = key => {
  //     const updatedContacts = contacts.filter(contact => contact.id !== key);
  //     setContacts(updatedContacts);
  //   };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>
      {/* {contacts.length > 0 && ( */}
      <Section title={'Contacts'}>
        {/* <Filter getValue={getValue} setValue={filter}></Filter> */}
        <ContactList>
          <Contact
          // contacts={filter === '' ? contacts : filteredContacts()}
          // removeContact={removeContact}
          ></Contact>
        </ContactList>
      </Section>
      {/* )} */}
    </>
  );
};

export default PhoneBook;
