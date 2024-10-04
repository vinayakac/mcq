import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Formik initial values and submit handler
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Retrieve user from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser || storedUser.email !== values.email) {
        formik.setErrors({ email: "Invalid email. Please enter a registered email." });
        return;
      }

      if (storedUser.password !== values.password) {
        formik.setErrors({ password: "Invalid password. Please try again." });
        return;
      }

      // If valid, redirect to the dashboard
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
      marginBottom: "10px",
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
    error: {
      color: "red",
      marginTop: "5px",
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
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
          {/* Error message for email */}
          {formik.errors.email && <div style={styles.error}>{formik.errors.email}</div>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
          {/* Error message for password */}
          {formik.errors.password && <div style={styles.error}>{formik.errors.password}</div>}
        </div>
        <button type="submit" style={styles.button}>Login</button>
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
