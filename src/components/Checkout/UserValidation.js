const yup = require('yup');

const Validation = yup.object().shape({
  firstName: yup.string().required('First name required'),
  lastName: yup.string().required('Last name required'),
  email: yup.string().email('Invalid email').required('Email Required'),
  phone: yup.string()
    .required('Phone number required')
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      'Invalid phone number',
    ),
  address: yup.string().required('Address Required'),

//   password: yup
//     .string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   birthDate: yup.date().required('Required'),
//   age: yup.number().required('Required'),
});

export default Validation;
