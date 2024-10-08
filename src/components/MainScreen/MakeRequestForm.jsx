import React, { useState } from 'react';
import './MakeRequestForm.css';

const MakeRequestForm = ({ addRecipient }) => {
  const [formData, setFormData] = useState({
    recipientName: '',
    bloodGroup: '',
    phoneNumber: '',
    state: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipient(formData);
    setFormData({
      recipientName: '',
      bloodGroup: '',
      phoneNumber: '',
      state: '',
      city: ''
    });
  };

  return (
    <div className="make-request-section">
      <form className="make-request-form" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default MakeRequestForm;
