/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { signupSchema } from './validationSchema';
import { useStyles } from './style';
import { signup } from '../../../actions/auth';

const SignupForm = ({ handleFormChange }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
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
          <div className={classes.inputContainer}>
            <Input
              placeholder="First name"
              value={values.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              errorStatus={errors.firstName ? true : null}
            />
            {touched.firstName && errors.firstName && <p className={classes.errorMessage}>{errors.firstName}</p>}
          </div>
          <div className={classes.inputContainer}>
            <Input
              placeholder="Last name"
              value={values.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              errorStatus={errors.lastName ? true : null}
            />
            {touched.lastName && errors.lastName && <p className={classes.errorMessage}>{errors.lastName}</p>}
          </div>
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
          <div className={classes.inputContainer}>
            <Input
              placeholder="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
              type="password"
              name="repeatPassword"
              errorStatus={errors.repeatPassword ? true : null}
            />
            {touched.repeatPassword && errors.repeatPassword && (
            <p className={classes.errorMessage}>{errors.repeatPassword}</p>
            )}
          </div>
          <div className={classes.buttonContainer}>
            <Button title="Signup" type="submit" size="big" variant="outline" />
          </div>
          {message ? (
            <p className={classes.message}>{message}</p>
          ) : (
            <p onClick={handleFormChange} role="presentation" className={classes.login}>
              Allready have account?
              {' '}
              <span className={classes.loginSpan}>Login</span>
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
