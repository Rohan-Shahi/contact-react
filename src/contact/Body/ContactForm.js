import React, { useEffect, useState } from "react";
import Form from "./Form";
// import { useFormik } from "formik";
// import * as Yup from "yup";

export default function ContactForm(props) {

  const { contact, setContact, editData,setIsEditing } = props;
  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  // };


  // const [initial, setInitial] = useState(initialValues);
  // useEffect(() => {
  //   if (editData) {
  //     setInitial(editData);
  //   }
  // }, [editData]);

  // const onSubmit = (values) => {
  //   if (editData) {
  //     /* 
  //       1.find indexof object in array
  //       2. contact[ind] = values
  //       3. setContact([...contact])
  //     */

  //     let id = editData.id;
  //     // let reqContact = contact.filter((item)=>{ return item.id === id});
  //     let ind = contact.findIndex((item) => {return item.id === id});
  //     contact[ind] = values;
  //     setContact([...contact]);
      
  //     setIsEditing(false);
      
  //   } else {
  //     let contactList = contact;
  //     contactList.push({...values,id:Math.floor(Math.random()*5000)});
  //     // console.log(contactList)
  //     // setContact([...contact,values]);
  //     setContact([...contactList]);
  //   }

  //   resetForm();

  // };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Please enter your name"),
  //   email: Yup.string().email().required("Please enter your email"),
  //   phone: Yup.string()
  //     .required("Please enter your Phone number")
  //     .max(10, "wrong number")
  //     .min(10, "wrong number"),
  // });

  // const {
  //   values,
  //   touched,
  //   resetForm,
  //   errors,
  //   handleSubmit,
  //   handleChange,
  //   handleBlur,
  // } = useFormik({
  //   enableReinitialize: true,
  //   initialValues: initial,
  //   onSubmit,
  //   validationSchema,
  // });
  // // console.log(values)
  // // console.log(errors)

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
