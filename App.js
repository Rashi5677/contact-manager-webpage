import Header from './components/Header';
import './App.css';
import React, { useState } from 'react';
import Addcontact from './components/Addcontact';
import Contactlist from './components/Contactlist';
import uuid4 from 'uuid4';
function App() {
  const[contact,setContact]=useState([])
  const addContact=(data)=>{
setContact([...contact,{id:uuid4(),data}]);
  }
  const removeContact=(id)=>{
const updatedList=contact.filter(
  (val)=>{
  return val.id!==id;
})
setContact(updatedList);
  }
  return ( 
    <div>
    <Header/>
    <Addcontact addContact={addContact}/>
    <Contactlist contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
