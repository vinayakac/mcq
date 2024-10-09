import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser || storedUser.email !== values.email) {
        formik.setErrors({ email: "Invalid email. Please enter a registered email." });
        return;
      }

      if (storedUser.password !== values.password) {
        formik.setErrors({ password: "Invalid password. Please try again." });
        return;
      }

      navigate("/dashboard");
    },
  });
  

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={formik.handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className={`form-input ${formik.errors.email ? "error" : ""}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
            required
          />
          {formik.errors.email && <div className="error-message">{formik.errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-input ${formik.errors.password ? "error" : ""}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            required
          />
          {formik.errors.password && <div className="error-message">{formik.errors.password}</div>}
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="signup-link">
        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
