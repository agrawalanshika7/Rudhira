
import './EntryScreen.css';
import React, { useState } from 'react';
import backgroundImage from '../../assets/backgroundImage.png';


  // Import the background image

const EntryScreen=()=> {
  return (
    <div className="EntryScreen">
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="left-panel">
        
        
          <div className="sign-up-section">
            <p className="New-user">New User ?</p>
            <a href="/signup">
        
            <button className="sign-up-button">Sign up</button>
            </a>
          </div>
        </div>
        <div className="right-panel">
          <p className='Existing-user'>Existing User ?</p>
          <a href="/login">
          <button className="sign-in-button">Sign in</button>
          </a>
        </div>
      </div>
    </div>
  );
}


export default EntryScreen;
