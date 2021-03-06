import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(20).required('Required'),
  repeatPassword: Yup.string()
    .min(3, 'Too Short')
    .max(20)
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
