import React from "react";

const FormInput = ({ label, error, ...inputProps }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...inputProps} />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default FormInput;
