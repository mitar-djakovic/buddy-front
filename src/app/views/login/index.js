import React, { useState } from 'react';
import { useStyles } from './style';
import dog from '../../assets/dog.jpg';
import logo from '../../assets/logo.png';
import { LoginForm, SignupForm } from '../../components/organisms';

const Login = () => {
  const classes = useStyles();
  const [loginActive, setLoginActive] = useState(true);

  return (
    <div className={classes.wrapper}>
      <div className={classes.formContainer}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} alt="" />
        </div>
        <div className={classes.formWrapper}>
          {loginActive ? (
            <LoginForm handleFormChange={() => setLoginActive(false)} />
          ) : (
            <SignupForm handleFormChange={() => setLoginActive(true)} />
          )}
        </div>
      </div>
      <div className={classes.infoContainer}>
        <img className={classes.img} src={dog} alt="" />
        <div className={classes.info}>
          <h1 className={classes.adopt}>Adopt.</h1>
          <h2 className={classes.dontShop}>Dont Shop.</h2>
          <div className={classes.underline} />
          <p className={classes.underlineText}>Find a best friend.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
