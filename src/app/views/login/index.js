import React, { useState } from 'react';
import dog from '../../assets/dog.jpg';
import logo from '../../assets/logo.png';
import { LoginForm, SignupForm } from '../../components/organisms';
import './style.scss';

const LoginView = () => {
  const [loginActive, setLoginActive] = useState(false);

  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          {loginActive ? (
            <LoginForm handleFormChange={() => setLoginActive(false)} />
          ) : (
            <SignupForm handleFormChange={() => setLoginActive(true)} />
          )}
        </div>
      </div>
      <div>
        <img src={dog} alt="" />
        <div>
          <h1>Adopt.</h1>
          <h2>Dont Shop.</h2>
          <div />
          <p>Find a best friend.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
