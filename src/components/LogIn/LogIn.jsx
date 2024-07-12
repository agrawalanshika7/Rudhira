import React from 'react';
import './LogIn.css';
import useLogin from '../../hooks/useLogIn.js';

const LoginForm = () => {
  const { email, setEmail, password, setPassword, handleLogin, errorMessage } = useLogin();

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleLogin}>
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

