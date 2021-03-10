const yup = require('yup');

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Yup.string()
//   .required('required')
//   .matches(phoneRegExp, 'Phone number is not valid')
//   .min(10, 'to short')
//   .max(10, 'to long');

const Validation = yup.object().shape({
  firstName: yup.string().required('First name required'),
  lastName: yup.string().required('Last name required'),
  email: yup.string().email('Invalid email').required('Email Required'),
  //   phone: yup.string()
  //     .required('Phone number required')
  //     .matches(
  //       /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  //       'Invalid phone number',
  //     ),
  phone: yup.string()
    .required('required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'too short')
    .max(10, 'too long'),
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
