import React, { useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import Swal from 'sweetalert2';

export default function ContactList(props) {
    const {contact,setContact} = props;
    // console.log(contact)
    // const [isEditing, setIsEditing] = useState(false);

    const handleDelete = (id) =>{
      
      let filtered = contact.filter((item)=>{ return item.id !== id});
      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setContact(filtered);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
    
    // const handleEdit = () =>{
    //   setIsEditing(!isEditing)
    // }

  return (
    <div >
        {contact.map((person)=>( 
            <ListItem 
              key = {Math.floor(Math.random() * 1000)}
              personName = {person.name}
              personEmail = {person.email}
              personPhone = {person.phone}
              handleDelete = {() =>{handleDelete(person.id)}}
              // handleEdit = {() => {handleEdit()}}
              // isEditing = {isEditing}
              contact = {contact}
              setContact = {setContact}
              // setIsEditing = {setIsEditing}
              person = {person}
            />
        ))}
      
    </div>
  );
}
