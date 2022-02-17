import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm(props) {

  const { contact, setContact, editData,setIsEditing } = props;
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };


  const [initial, setInitial] = useState(initialValues);
  useEffect(() => {
    if (editData) {
      setInitial(editData);
    }
  }, [editData]);

  const onSubmit = (values) => {
    if (editData) {
      /* 
        1.find indexof object in array
        2. contact[ind] = values
        3. setContact([...contact])
      */

      let id = editData.id;
      // let reqContact = contact.filter((item)=>{ return item.id === id});
      let ind = contact.findIndex((item) => {return item.id === id});
      contact[ind] = values;
      setContact([...contact]);
      
      setIsEditing(false);
      
    } else {
      let contactList = contact;
      contactList.push({...values,id:Math.floor(Math.random()*5000)});
      // console.log(contactList)
      // setContact([...contact,values]);
      setContact([...contactList]);
    }

    resetForm();

  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string()
      .required("Please enter your Phone number")
      .max(10, "wrong number")
      .min(10, "wrong number"),
  });

  const {
    values,
    touched,
    resetForm,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    enableReinitialize: true,
    initialValues: initial,
    onSubmit,
    validationSchema,
  });
  // console.log(values)
  // console.log(errors)

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={values.name}
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.name && touched.name ? (
              <div style={{ color: "red" }}>{errors.name}</div>
            ) : null}

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={values.email}
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <div style={{ color: "red" }}>{errors.email}</div>
            ) : null}

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                value={values.phone}
                className="form-control"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && touched.phone ? (
              <div style={{ color: "red" }}>{errors.phone}</div>
            ) : null}

           <button type="submit" className="btn btn-primary">
              {editData ? "Update" : "Submit"}
          </button>
          </form>
        </div>
      </div>
    </>
  );
}
