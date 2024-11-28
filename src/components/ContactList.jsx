import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import Contact from './Contact'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="contact-list">
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact} 
          deleteContact={() => dispatch(deleteContact(contact.id))} 
        />
      ))}
    </div>
  );
};

export default ContactList;
