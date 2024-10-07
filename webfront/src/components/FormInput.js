import React from "react";


const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className="form-input-container">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Handle blur event
        placeholder={placeholder}
        className={error ? "error" : ""}
      />
      {error && <div className="error-message">{error}</div>}

    </div>
  );
};

export default FormInput;
