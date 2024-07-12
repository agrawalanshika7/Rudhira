import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context';
import { BASE_URL, SIGNUP_ENDPOINT } from '../constants';

const useSignUp = () => {
  const { setAuthData } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserLoggedIn] = useState(true);
  const [signUpResponse, setSignUpResponse] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setAuthData({ email, password, isUserLoggedIn });
    console.log('Email:', email);
    console.log('Password:', password);

    if (email && password) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: email, password }),
      };

      fetch(BASE_URL + SIGNUP_ENDPOINT, requestOptions)
        .then((response) => response.json())
        .then((data) => setSignUpResponse(data));
    }
  };

  useEffect(() => {
    if (signUpResponse) {
      navigate('/profile-creation');
    }
  }, [signUpResponse, navigate]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
  };
};

export default useSignUp;
