import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateNumber = (number) => /^[0-9\s\-]+$/.test(number);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      alert('Name should contain only letters.');
      return;
    }

    if (!validateNumber(number)) {
      alert('Number should contain only digits, spaces, or hyphens.');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: Date.now().toString(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
