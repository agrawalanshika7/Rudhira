import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

const FORGOT_PASSWORD_ENDPOINT = '/users/forgotPassword';

const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [forgotPasswordResponse, setForgotPasswordResponse] = useState(null);
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "userName": email }),
    };
    fetch(BASE_URL + FORGOT_PASSWORD_ENDPOINT, requestOptions)
      .then((response) => response.json())
      .then((data) => setForgotPasswordResponse(data));
  };

  useEffect(() => {
    if (forgotPasswordResponse) {
      console.log('Password reset link sent:', forgotPasswordResponse);
      navigate('/password-reset-confirmation');
    }
  }, [forgotPasswordResponse, navigate]);

  return {
    email,
    setEmail,
    handleForgotPassword,
  };
};

export default useForgotPassword;
