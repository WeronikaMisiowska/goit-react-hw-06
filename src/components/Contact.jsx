import React from 'react';
import phoneIcon from '../icons/phone.png'; 
import userIcon from '../icons/user.png';
import '../components/styles.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-info">
          <div className="avatar">
            <img src={userIcon} alt="User Avatar" width="20" height="20" />
            <div className="contact-name">{contact.name}</div>
          </div>
          <div className="avatar">
            <img src={phoneIcon} alt="User Telephone" width="20" height="20" />
            <div className="contact-number">{contact.phone}</div>
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
