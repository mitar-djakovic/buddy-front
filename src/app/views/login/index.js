import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { LoginForm, SignupForm } from '../../components';
import { useStyles } from './style';

const LoginView = () => {
  const classes = useStyles();
  const [loginActive, setLoginActive] = useState(false);

  return (
    <div className={classes.view}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
      </div>
      <div className={classes.formContainer}>
        {loginActive ? (
          <LoginForm handleFormChange={() => setLoginActive(false)} />
        ) : (
          <SignupForm handleFormChange={() => setLoginActive(true)} />
        )}
      </div>
    </div>
  );
};

export default LoginView;
