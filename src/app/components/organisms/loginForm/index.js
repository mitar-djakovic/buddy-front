/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../../atoms';
import { loginSchema } from './validationSchema';
import { useStyles } from './style';
import { login } from '../../../actions/auth';

const LoginForm = ({ handleFormChange }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        const { email, password } = values;

        dispatch(login(email, password));
      }}
      validationSchema={loginSchema}
    >
      {({
        values, handleSubmit, handleChange, errors, touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <div className={classes.inputContainer}>
              <Input
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                errorStatus={errors.email ? true : null}
              />
              {touched.email && errors.email && <p className={classes.errorMessage}>{errors.email}</p>}
            </div>
            <div className={classes.inputContainer}>
              <Input
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                type="password"
                name="password"
                errorStatus={errors.password ? true : null}
              />
              {touched.password && errors.password && <p className={classes.errorMessage}>{errors.password}</p>}
            </div>
            <div className={classes.buttonContainer}>
              <Button title="Login" type="submit" size="big" variant="outline" />
            </div>
            {message ? (
              <p className={classes.message}>{message}</p>
            ) : (
              <p role="presentation" onClick={handleFormChange} className={classes.signup}>
                Dont have account?
                {' '}
                <span className={classes.signupSpan}> Signup</span>
              </p>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
