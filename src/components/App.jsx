import React from 'react';
import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
