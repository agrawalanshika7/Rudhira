import React from 'react';
import './ForgotPassword.css';
import useForgotPassword from '../../hooks/useHook';

const ForgotPassword = () => {
  const { email, setEmail, handleForgotPassword } = useForgotPassword();

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

