import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import FormInput from "../components/FormInput"; // Adjust the path if needed

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      studentName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      classLabel: "", // Adding class label
    },
    validate: (values) => {
      let errors = {};

      // Student Name validation
      if (!values.studentName) {
        errors.studentName = "Student Name is required";
      } else if (values.studentName.length < 2) {
        errors.studentName = "Student Name must be at least 2 characters long";
      } else if (values.studentName.length > 30) {
        errors.studentName = "Student Name cannot exceed 30 characters";
      }

      // Email validation
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          values.email
        )
      ) {
        errors.email = "Email is invalid (e.g., example@gmail.com)";
      }

      // Mobile number validation
      if (!values.mobileNumber) {
        errors.mobileNumber = "Mobile number is required";
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        errors.mobileNumber = "Mobile number must be 10 digits";
      }

      // Password validation
      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(values.password)
      ) {
        errors.password =
          "Password must be at least 8 characters, contain one capital letter, one number, and one special character";
      }

      // Confirm password validation
      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }

      // Class label validation
      if (!values.classLabel) {
        errors.classLabel = "Class is required";
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

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={formik.handleSubmit} className="register-form">
        {/* Student Name */}
        <div className="form-group">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <FormInput
            name="studentName"
            type="text"
            value={formik.values.studentName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Student Name"
            error={formik.touched.studentName && formik.errors.studentName}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <FormInput
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Email"
            error={formik.touched.email && formik.errors.email}
          />
        </div>

        {/* Mobile Number */}
        <div className="form-group">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <FormInput
            name="mobileNumber"
            type="text"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Mobile Number"
            error={formik.touched.mobileNumber && formik.errors.mobileNumber}
          />
        </div>

        {/* Class Label */}
        <div className="form-group">
          <label htmlFor="classLabel" className="form-label">
            Class
          </label>
          <select
            name="classLabel"
            value={formik.values.classLabel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-input ${
              formik.touched.classLabel && formik.errors.classLabel
                ? "error"
                : ""
            }`}
          >
            <option value="" label="Select class" />
            <option value="1-4" label="1-4" />
            <option value="5-7" label="5-7" />
            <option value="8-10" label="8-10" />
          </select>

          {formik.touched.classLabel && formik.errors.classLabel && (
            <div className="error-message">{formik.errors.classLabel}</div>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <FormInput
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Password"
            error={formik.touched.password && formik.errors.password}
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <FormInput
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
