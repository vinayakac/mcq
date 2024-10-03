import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error dynamically as the user corrects the input
    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };
      if (name === "username" && value) delete newErrors.username;
      if (
        name === "email" &&
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          value
        )
      )
        delete newErrors.email;
      if (name === "mobileNumber" && /^\d{10}$/.test(value))
        delete newErrors.mobileNumber;
      if (
        name === "password" &&
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(value)
      )
        delete newErrors.password;
      if (name === "confirmPassword" && value === formData.password)
        delete newErrors.confirmPassword;
      return newErrors;
    });
  };

  const validate = () => {
    let tempErrors = {};
    const { username, email, mobileNumber, password, confirmPassword } =
      formData;

    if (!username) tempErrors.username = "Username is required";
    if (!email) tempErrors.email = "Email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
        email
      )
    ) {
      tempErrors.email =
        "Email is invalid (e.g., example@gmail.com or example.co)";
    }
    if (!mobileNumber) tempErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(mobileNumber))
      tempErrors.mobileNumber = "Mobile number must be 10 digits";

    // Password regex: At least 8 characters, one letter, one number, and one special character (any special character)
    if (!password) tempErrors.password = "Password is required";
    else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(password)
    ) {
      tempErrors.password =
        "Password must be at least 8 characters, contain one letter, one number, and one special character (including underscores)";
    }
    if (password !== confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000); // Redirect after 1 second
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={errors.mobileNumber ? "input-error" : ""}
          />
          {errors.mobileNumber && (
            <p className="error">{errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
