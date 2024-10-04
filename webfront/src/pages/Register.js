import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Username is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          values.email
        )
      ) {
        errors.email =
          "Email is invalid (e.g., example@gmail.com or example.co)";
      }

      if (!values.mobileNumber) {
        errors.mobileNumber = "Mobile number is required";
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        errors.mobileNumber = "Mobile number must be 10 digits";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(values.password)
      ) {
        errors.password =
          "Password must be at least 8 characters, contain one capital letter, one number, and one special character";
      }

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      alert("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
<<<<<<< HEAD
    }
<<<<<<< HEAD

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Store data in local storage
    const userData = {
      username,
      email,
      password, // Consider encrypting passwords in a real application
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Set success message
    setSuccess("account created successfully!");

    // Clear the form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Create Account</h2>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      {success && (
        <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
=======
  };
=======
    },
  });
>>>>>>> develop


  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
<<<<<<< HEAD
            className={errors.username ? "input-error" : ""}
>>>>>>> develop
=======
            className={formik.errors.username ? "input-error" : ""}
>>>>>>> develop
          />
          {formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}
        </div>
<<<<<<< HEAD
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
=======
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
<<<<<<< HEAD
            className={errors.email ? "input-error" : ""}
>>>>>>> develop
=======
            className={formik.errors.email ? "input-error" : ""}
>>>>>>> develop
          />
          {formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
<<<<<<< HEAD
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
=======
        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            placeholder="Mobile Number"
            className={formik.errors.mobileNumber ? "input-error" : ""}
          />
          {formik.errors.mobileNumber && (
            <p className="error">{formik.errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
<<<<<<< HEAD
            className={errors.password ? "input-error" : ""}
>>>>>>> develop
=======
            className={formik.errors.password ? "input-error" : ""}
>>>>>>> develop
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
<<<<<<< HEAD
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
=======
        <div className="form-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Confirm Password"
<<<<<<< HEAD
            className={errors.confirmPassword ? "input-error" : ""}
>>>>>>> develop
=======
            className={formik.errors.confirmPassword ? "input-error" : ""}
>>>>>>> develop
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
          {formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
        </div>
<<<<<<< HEAD
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Create Account
=======
        <button type="submit" className="register-button">
          Register
>>>>>>> develop
        </button>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default RegistrationForm;
=======

