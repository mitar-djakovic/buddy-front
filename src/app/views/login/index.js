import React from 'react';
import { useStyles } from './style';
import dog from '../../assets/dog.jpg';
import logo from '../../assets/logo.png';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.formContainer}>
        <div>
          <img src={logo} alt="" />
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
