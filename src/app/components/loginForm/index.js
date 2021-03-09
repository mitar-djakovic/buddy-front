/* eslint-disable object-curly-newline */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToast, Input, Button } from '@chakra-ui/react';
import { loginSchema } from './validationSchema';
import { login } from '../../actions/auth';
import { useStyles } from './style';

const LoginForm = ({ handleFormChange, loading }) => {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const classes = useStyles();
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        const { email, password } = values;

        dispatch(login(email, password)).then((res) => {
          toast({
            title: res.message,
            status: res.token ? 'success' : 'error',
            duration: 3000,
            isClosable: true,
          });

          if (res.token && res.profileCompleted) {
            setTimeout(() => {
              histroy.push('/app/home');
            }, 3000);
          }

          if (res.token && !res.profileCompleted) {
            setTimeout(() => {
              histroy.push('/app/welcome');
            }, 3000);
          }
        });
      }}
      validationSchema={loginSchema}
    >
      {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <div className={classes.inputContainer}>
              <Input
                placeholder="Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
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
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                name="password"
                isInvalid={touched.password && !values.password}
                maxWidth
              />
              {touched.password && <p className={classes.errorMessage}>{errors.password}</p>}
            </div>
            <div className={classes.buttonContainer}>
              <Button isLoading={loading} type="submit" colorScheme="teal">
                Login
              </Button>
            </div>
            <div className={classes.messagesContainer}>
              <p className={classes.underText} role="presentation" onClick={handleFormChange}>
                Dont have account?
                <span className={classes.span}> Signup</span>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
