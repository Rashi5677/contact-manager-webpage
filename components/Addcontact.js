import React, { useState } from 'react';
// import '../App.css';
export default function Addcontact({addContact}) {
    const[contactData,setcontactdata]=useState({name:"",email:""});
    const handleChange=(e)=>{
        if(e.target.name==="name")
        {
            setcontactdata({...contactData,name:e.target.value});
        }
        else {
setcontactdata({...contactData,email:e.target.value});
        }
    }
    const handleadd=()=>{
if(contactData.name==="" || contactData.email==="")
    {
alert("please enter all details first") 
return
    }
    addContact(contactData);
    setcontactdata({name:"",Email:""});
    }
  return (
    <div className='formHeader'>
        <div className='add-contact'>Add Contact</div>
        <form>
            <label>Name:</label><br/>
            <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>
            <label>Email:</label><br/>
            <input type='email' placeholder='Enter email' name='Email' value={contactData.email}  onChange={handleChange}/>
        </form>
        <button className='btn' onClick={handleadd}>Add Contacts</button>
    </div>
  )
}
