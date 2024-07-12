import React from 'react';
import './SignUp.css';
import backgroundImage from '../../assets/signup.png';
import useSignUp from '../../hooks/useSignUp.js';

const SignUp = () => {
  const { email, setEmail, password, setPassword, handleSignUp } = useSignUp();

  return (
    <div className="sign-up">
      <div className="form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form className='formsignup' onSubmit={handleSignUp}>
          <input 
            className='inputsignup' 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            className='inputsignup' 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button className='buttonsignup' type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//fetch('https://api.example.com/data') .then((response) => response.json()) .then((data) => { // Handle the API response data here }) .catch((error) => { // Handle errors });


