import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Must be a Gmail address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[\W_]/, "Password must contain at least one special character or underscore")
      .required("Password is required"),
  });

  // Formik hook for form state management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;

      // Retrieve user from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser || storedUser.email !== email) {
        formik.setErrors({ email: "You must register first." });
        return;
      }

      if (storedUser.password !== password) {
        formik.setErrors({ password: "Invalid password. Please try again." });
        return;
      }

      // Redirect to the dashboard if login is successful
      navigate("/dashboard");
    },
  });

  // Inline styles for the login page
  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonIcon: {
      cursor: "pointer",
      position: "absolute",
      right: "10px",
      top: "10px",
      background: "none",
      border: "none",
    },
    error: {
      color: "red",
      marginBottom: "15px",
      textAlign: "center",
    },
    signupLink: {
      textAlign: "center",
      marginTop: "15px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            {...formik.getFieldProps("email")}
            placeholder="Enter your email"
            style={styles.input}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...formik.getFieldProps("password")}
              placeholder="Enter your password"
              style={styles.input}
            />
            <button
              type="button"
              style={styles.buttonIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div style={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          style={styles.button}
        >
          Login
        </button>
      </form>
      <div style={styles.signupLink}>
        <p>
          Don't have an account? <a href="/register" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
