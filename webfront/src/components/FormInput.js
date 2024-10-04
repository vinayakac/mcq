import React from "react";

const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  submitted,
  showPasswordToggle = false,
  showPassword = false,
  togglePasswordVisibility,
}) => {
  return (
    <div className="form-group">
      <input
        type={showPasswordToggle && showPassword ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error && submitted ? "input-error" : ""}
      />
      {showPasswordToggle && (
        <span className="password-icon" onClick={togglePasswordVisibility}>
          <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
        </span>
      )}
      {error && submitted && <p className="error">{error}</p>}
    </div>
  );
};

export default FormInput;
