import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../../atoms';
import { signupSchema } from './validationSchema';
import { signup } from '../../../actions/auth';
import { useStyles } from './style';

const SignupForm = ({ handleFormChange }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const message = useSelector((state) => state.auth.message);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
      }}
      onSubmit={(values) => {
        const {
          firstName, lastName, email, password, repeatPassword,
        } = values;

        dispatch(signup(firstName, lastName, email, password, repeatPassword));
      }}
      validationSchema={signupSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            errorMessage={errors.email}
          />
          <Input
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            type="password"
            name="password"
            errorMessage={errors.password}
          />
          <Input
            placeholder="Repeat password"
            value={values.repeatPassword}
            onChange={handleChange}
            type="password"
            name="repeatPassword"
            errorMessage={errors.repeatPassword}
          />
          <Button title="Signup" type="submit" />
          <div className={classes.messagesContainer}>
            <p>{message}</p>
            <p onClick={handleFormChange} role="presentation">
              Allready have account?
              {' '}
              <span>Login</span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
