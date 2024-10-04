import React from "react";

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
        required
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormInput;
