import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/Addcontact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // COMMENTING OUT BECAUSE WE RE NOT USING STATIC LIST BUT DYNAMIC
  //   const contacts = [
  //     {
  //     id:"1",
  //     name:'talal',
  //     email:'talal@gmail.com',
  //   },
  //   {
  //     id:"2",
  //     name:'talal',
  //     email:'talal@gmail.com',
  //   },
  //   {
  //     id:"3",
  //     name:'talal',
  //     email:'talal@gmail.com',
  //   },
  // ]
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  
  useEffect(() => {
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveContacts)setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
