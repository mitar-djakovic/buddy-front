import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { Button, Input } from '../../atoms';
import { loginSchema } from './validationSchema';
import { login } from '../../../actions/auth';
import { useStyles } from './style';

const LoginForm = ({ handleFormChange }) => {
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
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          if (res.profileCompleted) {
            setTimeout(() => {
              histroy.push('/app/home');
            }, 3000);
          } else {
            setTimeout(() => {
              histroy.push('/app/welcome');
            }, 3000);
          }
        });
      }}
      validationSchema={loginSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
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
            <Input
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              type="password"
              name="password"
              errorMessage={errors.password}
            />
            <Button title="Login" type="submit" size="big" variant="outline" />
            <div className={classes.messagesContainer}>
              <p role="presentation" onClick={handleFormChange}>
                Dont have account?
                {' '}
                <span> Signup</span>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
