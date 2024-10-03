import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain uppercase, lowercase, and a number."
      );
      isValid = false;
    }

    if (isValid) {
      console.log("Logging in with", email, password);
      navigate("/dashboard");
    }
  };

  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "24px",
      color: "#333",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      fontSize: "14px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    signupLink: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      cursor: "pointer",
      transition: "text-decoration 0.3s",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
          {emailError && <p style={styles.error}>{emailError}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
          />
          {passwordError && <p style={styles.error}>{passwordError}</p>}
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Login
        </button>
      </form>
      <div style={styles.signupLink}>
        <p>
          Don't have an account?{" "}
          <a
            href="/register"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
