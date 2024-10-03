import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // Admin login credentials (for demonstration, should be checked server-side)
  const adminEmail = "admin@example.com";
  const adminPassword = "Admin1234"; // In real apps, this should be hashed and checked by backend

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
    setLoginError("");

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
      if (email === adminEmail && password === adminPassword) {
        console.log("Admin logged in successfully");
        navigate("/admin-dashboard"); // Redirect to admin dashboard
      } else {
        setLoginError("Invalid admin credentials.");
      }
    }
  };

  const styles = {
    container: {
      width: "350px",
      margin: "150px auto",
      padding: "40px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
    },
    header: {
      textAlign: "center",
      fontSize: "28px",
      color: "#343a40",
      marginBottom: "30px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: 500,
      color: "#495057",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ced4da",
      borderRadius: "5px",
      fontSize: "16px",
    },
    error: {
      color: "red",
      fontSize: "13px",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
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
            placeholder="Enter admin password"
            style={styles.input}
          />
          {passwordError && <p style={styles.error}>{passwordError}</p>}
        </div>
        {loginError && <p style={styles.error}>{loginError}</p>}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
