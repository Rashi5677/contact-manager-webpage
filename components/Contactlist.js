import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Contactlist(props) {
    // console.log(contact,"from contactlist");
    const {contact,removeContact}=props;
    const contactList=contact.map((val)=>{
        return(
            <div className='contacts'>
                <div style={{marginLeft:"2px"}}>{val.data.name}</div>
                <div className='email'>{val.data.email}</div>
                <span onClick={()=>removeContact(val.data.id)}><DeleteIcon/></span>
            </div>
        )
    })
  return (
    <>
      <div className='ContactHeader'>Contact List</div>
      <div>{contactList}</div>
    </>
  )
}
