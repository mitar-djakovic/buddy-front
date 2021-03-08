/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../../atoms';
import { loginSchema } from './validationSchema';
import { login } from '../../../actions/auth';

const LoginForm = ({ handleFormChange }) => {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const message = useSelector((state) => state.auth.message);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        const { email, password } = values;

        dispatch(login(email, password)).then((res) => {
          if (res.profileCompleted) {
            histroy.push('/app/home');
          } else {
            histroy.push('/app/welcome');
          }
        });
      }}
      validationSchema={loginSchema}
    >
      {({
        values, handleSubmit, handleChange, errors, touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div>
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
              <Button title="Login" type="submit" size="big" variant="outline" />
            </div>
            <p role="presentation" onClick={handleFormChange}>
              Dont have account?
              {' '}
              <span> Signup</span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
