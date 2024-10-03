import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email) {
      setError("You must register first.");
      return;
    }

    // Validate email and password
    if (!validateEmail(email)) {
      setError("Please enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include at least one capital letter, one number, and one special character (or underscore)."
      );
      return;
    }

    if (storedUser.password !== password) {
      setError("Invalid password. Please try again.");
      return;
    }

    // If valid, redirect to the dashboard
    navigate("/dashboard"); // Adjust this to the correct route for your app
  };

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
      position: "relative",
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
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
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
          Don't have an account? <a href="/register" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
