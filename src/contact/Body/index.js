import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

export default function Body() {
    const [contact,setContact] = useState([]);
    // console.log(contact)
  return (
      <>
      <ContactForm setContact = { setContact }  contact={contact}/>
      <ContactList contact={contact} setContact = {setContact}/>
      </>
  )
}
