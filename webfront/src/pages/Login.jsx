import React, { useState } from "react";
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
          {emailError && <p style={styles.error}>{emailError}</p>}
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
