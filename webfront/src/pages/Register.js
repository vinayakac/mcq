import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error dynamically as the user corrects the input
    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };
      if (name === "username" && value) delete newErrors.username;
      if (
        name === "email" &&
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
          value
        )
      )
        delete newErrors.email;
      if (name === "mobileNumber" && /^\d{10}$/.test(value))
        delete newErrors.mobileNumber;
      if (
        name === "password" &&
        /^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(value) // Updated regex here
      )
        delete newErrors.password;
      if (name === "confirmPassword" && value === formData.password)
        delete newErrors.confirmPassword;
      return newErrors;
    });
  };

  const validate = () => {
    let tempErrors = {};
    const { username, email, mobileNumber, password, confirmPassword } =
      formData;

    if (!username) tempErrors.username = "Username is required";
    if (!email) tempErrors.email = "Email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|net|org|edu|gov|mil|info|biz)$/.test(
        email
      )
    ) {
      tempErrors.email =
        "Email is invalid (e.g., example@gmail.com or example.co)";
    }
    if (!mobileNumber) tempErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(mobileNumber))
      tempErrors.mobileNumber = "Mobile number must be 10 digits";

    if (!password) tempErrors.password = "Password is required";
    else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(password) // Updated regex here
    ) {
      tempErrors.password =
        "Password must be at least 8 characters, contain one capital letter, one number, and one special character";
    }
    if (password !== confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
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

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className={errors.username ? "input-error" : ""}
>>>>>>> develop
          />
          {errors.username && <p className="error">{errors.username}</p>}
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={errors.email ? "input-error" : ""}
>>>>>>> develop
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={errors.mobileNumber ? "input-error" : ""}
          />
          {errors.mobileNumber && (
            <p className="error">{errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={errors.password ? "input-error" : ""}
>>>>>>> develop
          />
          {errors.password && <p className="error">{errors.password}</p>}
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
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={errors.confirmPassword ? "input-error" : ""}
>>>>>>> develop
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
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
export default Register;
>>>>>>> develop
