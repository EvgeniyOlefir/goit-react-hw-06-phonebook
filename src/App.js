import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/index';
import s from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.secondaryTitle}>Contacts</h2>
        <Filter />
        <ContactList />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
