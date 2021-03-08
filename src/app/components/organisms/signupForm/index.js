/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../../atoms';
import { signupSchema } from './validationSchema';
import { signup } from '../../../actions/auth';

const SignupForm = ({ handleFormChange }) => {
  const dispatch = useDispatch();
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
        values, handleSubmit, handleChange, errors, touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <Input
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              type="email"
              name="email"
              errorMessage={errors.email}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              type="password"
              name="password"
              errorMessage={errors.password}
            />
          </div>
          <div>
            <Input
              placeholder="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
              type="password"
              name="repeatPassword"
              errorMessage={errors.repeatPassword}
            />
          </div>
          <div>
            <Button title="Signup" type="submit" />
          </div>
          {message}
          <p onClick={handleFormChange} role="presentation">
            Allready have account?
            {' '}
            <span>Login</span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
