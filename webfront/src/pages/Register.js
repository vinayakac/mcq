import React, { useState } from 'react';
import FormInput from './FormInput'; // Adjust the path as necessary
import FormInput from '../components/FormInput'; // Adjust the path based on your actual structure


const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    // Simple validation logic
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form or perform the desired action
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        error={errors.firstName}
      />
      <FormInput
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        error={errors.lastName}
      />
      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        error={errors.email}
      />
      <FormInput
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        error={errors.mobile}
      />
      <FormInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        error={errors.password}
      />
      <FormInput
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        error={errors.confirmPassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
