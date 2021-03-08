import React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import Validation from './UserValidation';
import './Checkout.css';

const Checkout = () => (
  <div className="App">
    <h1>
      {/* Form */}
    </h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={Validation}
      onSubmit={(fields) => {
        console.log(fields);
      }}
    >
      <Form className="form">
        <Field name="firstName" type="text" placeholder="First Name" />
        <ErrorMessage
          name="firstName"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />

        <Field name="lastName" type="text" placeholder="Last Name" />
        <ErrorMessage
          name="lastName"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage
          name="email"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />

        <Field name="phone" type="number" placeholder="Phone number" />
        <ErrorMessage
          name="phone"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />

        <Field name="address" type="text" placeholder="Address" />
        <ErrorMessage
          name="address"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Checkout;
