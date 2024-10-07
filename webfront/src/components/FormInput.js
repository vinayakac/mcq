import React, { useState } from 'react';
import './FormInput.css'; // Ensure you style this appropriately

const FormInput = ({ type, name, value, onChange, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-input">
      <label>
        {placeholder} {error && <span className="required-star">*</span>}
      </label>
      <div className="input-wrapper">
        <input
          type={showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={error ? 'input-error' : ''}
          required={error}
        />
        {type === 'password' && (
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
