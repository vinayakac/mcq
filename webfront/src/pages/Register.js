import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    studentName: Yup.string().required("Student name is required"),
    class: Yup.string().required("Please choose a class"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/(?=.*[A-Z])/, "Must contain one uppercase letter")
      .matches(/(?=.*\d)/, "Must contain one number")
      .matches(/(?=.[!@#$%^&])/, "Must contain one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      studentName: "",
      class: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      alert("Registration successful");
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1000);
    },
  });

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            placeholder="Enter Student Name"
            value={formik.values.studentName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.studentName && formik.errors.studentName
                ? "input-error"
                : ""
            }
          />
          {formik.touched.studentName && formik.errors.studentName && (
            <p className="error">{formik.errors.studentName}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="class">Class</label>
          <select
            name="class"
            id="class"
            value={formik.values.class}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.class && formik.errors.class ? "input-error" : ""
            }
          >
            <option value="">Choose Class</option>
            <option value="1-4">1st to 4th</option>
            <option value="5-7">5th to 7th</option>
            <option value="8-10">8th to 10th</option>
          </select>
          {formik.touched.class && formik.errors.class && (
            <p className="error">{formik.errors.class}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.mobileNumber && formik.errors.mobileNumber
                ? "input-error"
                : ""
            }
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <p className="error">{formik.errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
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
