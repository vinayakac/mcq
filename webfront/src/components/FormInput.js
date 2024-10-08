// src/components/FormInput.js
import React from "react";

const FormInput = ({
  name,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => (
  <div className="form-input-container">
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`form-input ${error ? "error" : ""}`}
    />
    {error && <div className="error-message">{error}</div>}
  </div>
);

export default FormInput; // Ensure this line is present
