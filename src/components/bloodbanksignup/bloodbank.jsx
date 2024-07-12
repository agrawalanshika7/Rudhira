import React from 'react';
import './bloodbank.css';
import useForm from '../../hooks/useForm';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const initialFormValues = {
  bloodBankName: '',
  ownerFirstName: '',
  ownerLastName: '',
  address: '',
  city: '',
  state: '',
  phoneNumber: '',
};

const BloodBank = () => {
  const { formData, handleChange, handleSubmit } = useForm(initialFormValues);

  return (
    <div className="form-containerbb">
      <form className="formbb" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blood Bank's Name"
          name="bloodBankName"
          className="form-input1bb"
          value={formData.bloodBankName}
          onChange={handleChange}
          required
        />
        <div className="form-rowbb">
          <input
            type="text"
            placeholder="Owner's First Name"
            name="ownerFirstName"
            className="form-inputbb"
            value={formData.ownerFirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Owner's Last Name"
            name="ownerLastName"
            className="form-inputbb"
            value={formData.ownerLastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="form-input1bb"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="form-rowbb">
          <input
            type="text"
            placeholder="City"
            name="city"
            className="form-inputbb"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select
            name="state"
            className="form-inputbb"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your state
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Phone No"
            name="phoneNumber"
            className="form-inputbb"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-buttonbb">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default BloodBank;


