import React, { useState, useEffect } from 'react'; // Import useEffect
import './ForgotPassword.css';
import { BASE_URL } from '../../constants'; // Corrected path
import { useNavigate } from 'react-router-dom';

const FORGOT_PASSWORD_ENDPOINT = '/users/forgotPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [forgotPasswordResponse, setForgotPasswordResponse] = useState(null);
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "userName": email
      })
    };
    fetch(BASE_URL + FORGOT_PASSWORD_ENDPOINT, requestOptions)
      .then(response => response.json())
      .then(data => setForgotPasswordResponse(data));
  };

  useEffect(() => {
    if (forgotPasswordResponse) {
      console.log('Password reset link sent:', forgotPasswordResponse);
      navigate('/password-reset-confirmation');
    }
  }, [forgotPasswordResponse, navigate]);

  return (
    <div className="containerfp">
      <div className="email-containerfp">
        <form onSubmit={handleForgotPassword}>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <div className="button-containerfp">
            <button type="submit">Send Link</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
