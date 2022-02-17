import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactForm from "../../contact/Body/ContactForm";

export default function ListItem(props) {
  const { personName, personEmail, personPhone, handleDelete,contact,setContact,person} = props;
  const [toggle, setToggle] = useState(false);
  const [isEditing,setIsEditing] = useState(false);
  
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleEdit = () =>{
    setIsEditing(!isEditing);
  }
  return (
    <>
   
    <div className="card w-50 mt-5 mx-auto">
      <div
        className="card-header"
        style={{ backgroundColor: "#0d6efd", color: "white" }}
      >
        <i
          className="bi bi-caret-down-fill me-2"
          onClick={() => {
            handleToggle();
          }}
        ></i>
        {personName}
        <div className="float-end">
          <i className="bi bi-trash " onClick={handleDelete}></i>
          <i className="bi bi-pencil-square ms-3" onClick={handleEdit}></i>
        </div>
      </div>
      {isEditing? 
      <ContactForm contact={contact} setContact={setContact} editData={person} setIsEditing={setIsEditing}/>
      : 
      
      toggle ? 
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">{personEmail}</li>
            <li className="list-group-item">{personPhone}</li>
          </ul>
        </div>
       : null
   }
 
 </div>
 
    </>
  );
}
