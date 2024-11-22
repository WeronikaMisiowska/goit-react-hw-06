import React from 'react';

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-info">
            <div className="avatar">
                      <img src="src/icons/phone.png" alt="User Avatar" width="20" height="20" />
          <div className="contact-name">{contact.name}</div>
          </div>
            <div className="avatar">
                      <img src="src/icons/user.png" alt="User Telephone" width="20" height="20" />
            <div className="contact-number">{contact.number}</div>
            </div>
        </div>
        <button className="delete-button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;

