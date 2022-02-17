import React, { useEffect, useState } from "react";
import Form from "./Form";

export default function ContactForm(props) {

  const { contact, setContact, editData,setIsEditing } = props;

  return (
    <>
      <div className="card w-50 mx-auto mt-5">
        <div
          className="card-header"
          style={{ backgroundColor: "#0d6efd", color: "white" }}
        >
        {editData? 'Edit Form' : 'Contact Form'}
        </div>
        <div className="card-body">
         <Form contact={contact} setContact={setContact} editData={editData} setIsEditing={setIsEditing}/>
        </div>
      </div>
    </>
  );
}
