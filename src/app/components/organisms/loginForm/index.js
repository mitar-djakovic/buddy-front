import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { loginSchema } from './validationSchema';
import { useStyles } from './style';

const LoginForm = ({ handleFormChange }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log('values', values);
        // dispatch(login(values.email, values.password))
      }}
      validationSchema={loginSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
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
              {errors.email && <p className={classes.errorMessage}>{errors.email}</p>}
            </div>
            <div className={classes.buttonContainer}>
              <Button title="Login" type="submit" size="big" variant="outline" />
            </div>
            <p role="presentation" onClick={handleFormChange} className={classes.signup}>
              Dont have account?
              {' '}
              <span className={classes.signupSpan}> Signup</span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
