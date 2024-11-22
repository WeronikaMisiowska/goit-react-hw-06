import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(50, 'Name is too long'),
  number: Yup.string()
    .required('Number is required')
    .matches(/\d+/, 'Invalid number format'),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values);
        resetForm();  
      }}
    >
      <Form className="contact-form">
              <div className="form-container">
                  <div className="form-group">
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            type="text"
            className="form-field"
          />
        
          <ErrorMessage name="name" component="div" className="error" />
                  </div>
                  <div className="form-group">
          <label htmlFor="number">Number:</label>
          <Field
            name="number"
            type="text"
            className="form-field"
          />
        
          <ErrorMessage name="number" component="div" className="error" />
</div>
         
          <button type="submit" className="submit-button">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
