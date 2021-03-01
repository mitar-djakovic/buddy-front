/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { signupSchema } from './validationSchema';
import { useStyles } from './style';

const SignupForm = ({ handleFormChange }) => {
  const classes = useStyles();
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
        console.log('values');
      }}
      validationSchema={signupSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
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
            {errors.firstName && <p className={classes.errorMessage}>{errors.firstName}</p>}
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
            {errors.lastName && <p className={classes.errorMessage}>{errors.lastName}</p>}
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
            {errors.email && <p className={classes.errorMessage}>{errors.email}</p>}
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
            {errors.password && <p className={classes.errorMessage}>{errors.password}</p>}
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
            {errors.repeatPassword && <p className={classes.errorMessage}>{errors.repeatPassword}</p>}
          </div>
          <div className={classes.buttonContainer}>
            <Button title="Signup" type="submit" size="big" variant="outline" />
          </div>
          <p onClick={handleFormChange} role="presentation" className={classes.login}>
            Allready have account?
            {' '}
            <span className={classes.loginSpan}>Login</span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
