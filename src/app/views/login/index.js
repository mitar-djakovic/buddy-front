import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { LoginForm, SignupForm } from '../../components';
import { useStyles } from './style';

const LoginView = () => {
  const classes = useStyles();
  const [loginActive, setLoginActive] = useState(true);
  const loading = useSelector((state) => state.auth.loading);

  return (
    <div className={classes.view}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
      </div>
      <div className={classes.formContainer}>
        {loginActive ? (
          <LoginForm loading={loading} handleFormChange={() => setLoginActive(false)} />
        ) : (
          <SignupForm loading={loading} handleFormChange={() => setLoginActive(true)} />
        )}
      </div>
    </div>
  );
};

export default LoginView;
