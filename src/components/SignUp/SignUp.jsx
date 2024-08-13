import React, { useState } from 'react'; // Import useState here
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import backgroundImage from '../../assets/signup.png';
import useUnifiedApi from '../../hooks/useHook';

const SignUp = () => {
  const navigate = useNavigate();
  const { handleSignUp } = useUnifiedApi();
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  
  const onSubmit = (e) => {
    e.preventDefault();
    handleSignUp()
      .then(() => {
        console.log('Sign-up successful');
        navigate('/profile-creation');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="sign-up">
      <div className="form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form className='formsignup' onSubmit={onSubmit}>
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


