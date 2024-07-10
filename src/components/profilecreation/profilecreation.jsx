import React from 'react';

import './profilecreation.css';

// Import images for your logos
import civilianIcon from '../../assets/civilianLogo.png'; // Replace with your path
import bloodBankIcon from '../../assets/bloodBankLogo.png'; // Replace with your path
import backgroundImage from '../../assets/ProfileCreation.png';


const ProfileCreation = () => {
 /* const handleCivilianClick = () => {
    // Replace with your desired action when civilian logo is clicked
    // (e.g., display an alert, update state)
    alert('Civilian Option Clicked!');
  };

  const handleBloodBankClick = () => {
    // Replace with your desired action when blood bank logo is clicked
    // (e.g., display an alert, update state)
    alert('Blood Bank Option Clicked!');
  };*/

  return (
    <div className="registration-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div >
       
         <a href='civilian'><img role='button' src={civilianIcon} alt="Civilian" className="icon1" /*onClick={handleCivilianClick}*//></a> 
       
       <a href='blood-bank'> <img role='button' src={bloodBankIcon} alt="Blood Bank" className="icon2" /*onClick={handleBloodBankClick}*//></a> 
        
      </div>
    </div>
  );
};
export default ProfileCreation;