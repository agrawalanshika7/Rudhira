import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import useLogin from '../../hooks/useHook.js';
import useUnifiedApi from '../../hooks/useHook.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const {  handleLogin, errorMessage } = useUnifiedApi();
  const [email,setEmail] = useState('');
  const [password,setPassword] =useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)
      /*(() => {
        console.log('Login successful');
      //  navigate('/mainscreen');
      })
      .catch((err) => console.error(err));*/
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <input 
            className="styled-input" 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            className="styled-input" 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <a className="styled-input1" href='/forgot-password'>Forgot password</a>
          <button className="button" type="submit">Sign in</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;


