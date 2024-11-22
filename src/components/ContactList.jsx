import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="contacts-container">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
