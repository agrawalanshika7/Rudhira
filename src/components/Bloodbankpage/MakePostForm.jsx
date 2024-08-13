import React, { useState } from 'react';
import './MakePostForm.css';

const MakeRequestForm = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    bloodGroup: '',
    phoneNumber: '',
    state: '',
    city: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation logic can be added here

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch('/api/make-request', requestOptions); // Adjust the endpoint as necessary
      const data = await response.json();
      if (response.ok) {
        setResponseMessage('Request published successfully!');
      } else {
        setResponseMessage('Failed to publish request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="make-request-section">
      <form className="make-request-form" onSubmit={handleSubmit} style={{ backgroundColor: "brown" }}>
        <div className='make-requestbox'>
          <div>
            <input 
              type="text" 
              name="recipientName" 
              placeholder="Recipient's name" 
              value={formData.recipientName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <select 
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div>
            <input 
              type="text" 
              name="phoneNumber" 
              placeholder="Phone Number" 
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='state-citybox'>
          <div>
            <input 
              type="text" 
              name="state" 
              placeholder="State" 
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='make-requestsubmit'>
          <button className='make-requestbutton' type="submit">Publish request</button>
        </div>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default MakeRequestForm;
