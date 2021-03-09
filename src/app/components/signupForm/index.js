/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useToast, Input, Button } from '@chakra-ui/react';
import { signupSchema } from './validationSchema';
import { signup } from '../../actions/auth';
import { useStyles } from './style';

const SignupForm = ({ handleFormChange, loading }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
      }}
      onSubmit={(values) => {
        const { email, password, repeatPassword } = values;

        dispatch(signup(email, password, repeatPassword)).then((res) => {
          toast({
            title: res.message,
            status: res.error ? 'error' : 'success',
            duration: 3000,
            isClosable: true,
          });
        });
      }}
      validationSchema={signupSchema}
    >
      {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div className={classes.inputContainer}>
            <Input
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              isInvalid={touched.email && !values.email}
              maxWidth
            />
            {touched.email && <p className={classes.errorMessage}>{errors.email}</p>}
          </div>
          <div className={classes.inputContainer}>
            <Input
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              isInvalid={touched.password && !values.password}
              maxWidth
            />
            {touched.password && <p className={classes.errorMessage}>{errors.password}</p>}
          </div>
          <div className={classes.inputContainer}>
            <Input
              placeholder="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
              type="password"
              name="repeatPassword"
              onBlur={handleBlur}
              isInvalid={touched.repeatPassword && !values.repeatPassword}
              maxWidth
            />
            {touched.repeatPassword && <p className={classes.errorMessage}>{errors.repeatPassword}</p>}
          </div>
          <div className={classes.buttonContainer}>
            <Button isLoading={loading} type="submit" colorScheme="teal">
              Signup
            </Button>
          </div>
          <div className={classes.messagesContainer}>
            <p className={classes.underText} onClick={handleFormChange} role="presentation">
              Allready have account?
              <span className={classes.span}> Login</span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
