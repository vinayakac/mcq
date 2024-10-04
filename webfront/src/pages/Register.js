import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import FormInput from "../components/FormInput"; // Adjust the path if needed

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false); 
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

      // Username validation: min 2, max 30 characters
      if (!values.username) {
        errors.username = "Username is required";
      } else if (values.username.length < 2) {
        errors.username = "Username must be at least 2 characters long";
      } else if (values.username.length > 30) {
        errors.username = "Username cannot exceed 30 characters";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          values.email
        )
      ) {
        errors.email = "Email is invalid (e.g., example@gmail.com or example.co)";
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
        errors.password = "Password must be at least 8 characters, contain one capital letter, one number, and one special character";
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
    setSubmitted(true);
    formik.handleSubmit(e);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Username"
          error={formik.errors.username}
          submitted={submitted}
        />
        <FormInput
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          error={formik.errors.email}
          submitted={submitted}
        />
        <FormInput
          name="mobileNumber"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          placeholder="Mobile Number"
          error={formik.errors.mobileNumber}
          submitted={submitted}
        />
        <FormInput
          type={showPassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          error={formik.errors.password}
          submitted={submitted}
          showPasswordToggle
          showPassword={showPassword}
          togglePasswordVisibility={() => setShowPassword(!showPassword)}
        />
        <FormInput
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm Password"
          error={formik.errors.confirmPassword}
          submitted={submitted}
          showPasswordToggle
          showPassword={showConfirmPassword}
          togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
