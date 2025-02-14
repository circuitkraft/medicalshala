import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import logo from "../images/medicalshala.png";
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate= useNavigate();
  function handleClick(){
    navigate("/askai");
  }
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <img src={logo} alt="MedicalShala Logo" className="logo" />
          <h2>Welcome Back!</h2>
          <p>Sign in to your account</p>
          <br />
          <br />
          <form>
            <input type="email" placeholder="Email" className="input-field" />
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/" className="forgot-password">Forgot Password?</a>
            </div>
            <br/>
            <br/>
            <button type="submit" className="login-button" onClick={handleClick}>Sign In</button>
          </form>
          <br/>
          <div className="or-divider">Or Sign in with</div>
          <div className="social-login">
            <button className="google-btn"><FcGoogle alt="Google" className="google-icon"/></button>
            <button className="apple-btn"><BsApple alt="Apple" className="apple-icon"/></button>
          </div>
          <br/>
          <br/>
          <p className="register-text">
            Already have an Account? <a href="/" className="register-link">Register</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <h1 className="text">Revolutionize Healthcare <br/>Management Effortlessly!</h1>
        <br/>
        <p className="quote">
          Effortlessly manage appointments, <br/>health records, and patient <br/> interactions 
          with our all-in-one <br/> healthcare management platform.
        </p>
      </div>
    </div>
  );
};

export default Login;
