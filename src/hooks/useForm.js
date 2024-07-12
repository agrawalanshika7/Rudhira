import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

const CREATE_PROFILE_ENDPOINT = '/users/makeProfile';

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: 'user' }),
    };
    fetch(BASE_URL + CREATE_PROFILE_ENDPOINT, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Profile created:', data);
        navigate('/profile-success');
      });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
