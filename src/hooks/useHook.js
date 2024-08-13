import { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context';
import { BASE_URL } from '../constants';

const useUnifiedApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  const buildQueryParams = (params) => {
    if (!params) return '';
    return (
      '?' +
      Object.entries(params)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&')
    );
  };

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}, queryParams = null) => {
      setLoading(true);
      setError(null);

      try {
        const queryString = buildQueryParams(queryParams);
        const fullUrl = `${BASE_URL}${url}${queryString}`;

        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        };

        if (body) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(fullUrl, options);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Something went wrong');
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleForgotPassword = (email) => {
    request('/users/forgotPassword', 'POST', { userName: email })
      .then(() => navigate('/password-reset-confirmation'))
      .catch((err) => console.error(err));
  };

  const handleLogin = (email, password) => {
    request('/users/login', 'POST', { userName: email, password })
      .then((data) => {
        setAuthData(data);
        if(data?.message=='logged in'){
          navigate('/dashboard');
        }
     
        
      })
      .catch((err) => console.error(err));
  };
 
  const handleMakeRequest = (data) => {
    request('/users/makeRequest', 'POST', data)
      .then(() =>{} )
      .catch((err) => console.error(err));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    request('/users/register', 'POST', { userName: email, password })
      .then((data) => {
        setAuthData({ email, password, isUserLoggedIn: true });
        navigate('/profile-creation');
      })
      .catch((err) => console.error(err));
  };

  const handleCreateProfile = (formData) => {
    request('/users/makeProfile', 'POST', { ...formData, role: 'user' })
      .then(() => navigate('/profile-success'))
      .catch((err) => console.error(err));
  };

  return {
 
    loading,
    error,
    data,
    request,
    handleForgotPassword,
    handleLogin,
    handleSignUp,
    handleCreateProfile,
  };
};

export default useUnifiedApi;

/*
import React, { useState } from 'react';
import useUnifiedApi from './useHook';

const MyComponent = () => {
  const {
    loading,
    error,
    data,
    handleForgotPassword,
    handleLogin,
    handleSignUp,
    handleCreateProfile,
  } = useUnifiedApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateProfile(formData);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      // Example usage 
      <button onClick={() => handleForgotPassword(email)}>Forgot Password</button>
      <button onClick={() => handleLogin(email, password)}>Login</button>
      <button onClick={() => handleSignUp(email, password)}>Sign Up</button>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleFormChange} />
        <input type="text" name="email" onChange={handleFormChange} />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default MyComponent;
*/