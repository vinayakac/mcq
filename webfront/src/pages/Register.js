import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),
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
      .matches(/(?=.*[!@#$%^&*])/, "Must contain one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
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
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.username && formik.errors.username ? "input-error" : ""}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.mobileNumber && formik.errors.mobileNumber ? "input-error" : ""}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <p className="error">{formik.errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.password && formik.errors.password ? "input-error" : ""}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "input-error" : ""}
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
