import React, { useContext, useState, useEffect } from 'react';
import './SignUp.css';
import backgroundImage from '../../assets/signup.png';
import { AuthContext } from '../../Context';
import { useNavigate } from "react-router-dom";
import { BASE_URL, SIGNUP_ENDPOINT } from '../../constants';

const SignUp = () => {
  const { setAuthData, authData } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [signUpResponse, setSignUpResponse] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Store email and password in context
    setAuthData({ email, password, isUserLoggedIn });
    console.log('Email:', email);
    console.log('Password:', password);
    if(email && password ){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          "userName": email,
          "password": password
         })
    };
    fetch(BASE_URL+SIGNUP_ENDPOINT, requestOptions)
        .then(response => response.json())
        .then(data =>setSignUpResponse(data));
    }
    
  };
  useEffect(() => {
    if(signUpResponse){
navigate('/profile-creation')
    }
  },[signUpResponse]);
  //console.log("authData", authData);

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
}

export default SignUp;

//fetch('https://api.example.com/data') .then((response) => response.json()) .then((data) => { // Handle the API response data here }) .catch((error) => { // Handle errors });


