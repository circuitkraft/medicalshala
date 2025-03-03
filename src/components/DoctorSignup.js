import React, { useState } from "react";
import "../styles/DoctorSignup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../Images/medicalshala.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    specialization: "",
    hospitalName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") setShowPassword(!showPassword);
    else setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo} alt="Medicalshala Logo" className="logo" />
        <h2>Join Our Healthcare Network</h2>
        <p>Register to Continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital’s / Clinic’s Name"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="terms-container">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label> Terms & Conditions</label>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <div className="social-signin">
          <p>Or Sign In with</p>
          <div className="social-icons">
            <button className="google-btn"><FcGoogle /></button>
            <button className="apple-btn"><FaApple /></button>
          </div>
        </div>

        <p className="signin-text">
          Already have an Account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignup;
