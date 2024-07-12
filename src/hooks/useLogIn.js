import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

const LOGIN_ENDPOINT = '/users/login';

const useLogin = () => {
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
        userName: email,
        password: password,
      }),
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

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    errorMessage,
  };
};

export default useLogin;
