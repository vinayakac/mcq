import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Username is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          values.email
        )
      ) {
        errors.email =
          "Email is invalid (e.g., example@gmail.com or example.co)";
      }

      if (!values.mobileNumber) {
        errors.mobileNumber = "Mobile number is required";
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        errors.mobileNumber = "Mobile number must be 10 digits";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(values.password)
      ) {
        errors.password =
          "Password must be at least 8 characters, contain one capital letter, one number, and one special character";
      }

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      alert("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted
    formik.handleSubmit(e);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
            className={formik.errors.username && submitted ? "input-error" : ""}
          />
          {formik.errors.username && submitted && (
            <p className="error">{formik.errors.username}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            className={formik.errors.email && submitted ? "input-error" : ""}
          />
          {formik.errors.email && submitted && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            placeholder="Mobile Number"
            className={
              formik.errors.mobileNumber && submitted ? "input-error" : ""
            }
          />
          {formik.errors.mobileNumber && submitted && (
            <p className="error">{formik.errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            className={formik.errors.password && submitted ? "input-error" : ""}
          />
          <span
            className="password-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </span>
          {formik.errors.password && submitted && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Confirm Password"
            className={
              formik.errors.confirmPassword && submitted ? "input-error" : ""
            }
          />
          <span
            className="password-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <i
              className={
                showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"
              }
            ></i>
          </span>
          {formik.errors.confirmPassword && submitted && (
            <p className="error">{formik.errors.confirmPassword}</p>
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
