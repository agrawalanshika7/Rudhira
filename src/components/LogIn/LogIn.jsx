import React, { useState } from 'react';
import './LogIn.css';
import { BASE_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const LOGIN_ENDPOINT = '/users/login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "userName": email,
        "password": password
      })
    };

    try {
      const response = await fetch(BASE_URL + LOGIN_ENDPOINT, requestOptions);
      const data = await response.json();
      if (response.ok) {
        setLoginResponse(data);
        navigate('/dashboard'); // Adjust the path as necessary
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

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
