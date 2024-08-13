import React from 'react';
import { useNavigate } from 'react-router-dom';
import './civilian.css';
import useForm from '../../hooks/useForm';
import useUnifiedApi from '../../hooks/useHook';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const initialFormValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  address: '',
  state: '',
  city: '',
  dob: '',
  bloodGroup: '',
  gender: '',
};

const Civilian = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit } = useForm(initialFormValues);
  const { handleCreateProfile } = useUnifiedApi();

  const onSubmit = () => {
    handleCreateProfile(formData)
      .then(() => {
        console.log('Profile created successfully');
        navigate('/mainscreen');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-containercivilian">
      <form className="formcivilian" onSubmit={(e) => handleSubmit(e, onSubmit)}>
        <div className="form-rowcivilian">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="form-inputcivilian"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Middle Name"
            name="middleName"
            className="form-inputcivilian"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="form-inputcivilian"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="form-input1civilian"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="form-rowcivilian">
          <select
            name="state"
            className="form-inputcivilian"
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
            type="text"
            placeholder="City"
            name="city"
            className="form-inputcivilian"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            className="form-inputcivilian"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-rowcivilian">
          <select
            className="form-inputcivilian"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select blood group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <select
            className="form-inputcivilian"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="form-buttoncivilian">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Civilian;




