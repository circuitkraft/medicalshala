import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../Images/medicalshala.png";
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault(); 
    navigate("/askai");
  }
  function handleSignup(){
    navigate("/signup");
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box-container"> 
          <div className="login-box">
            <img src={logo} alt="MedicalShala Logo" className="logo" />
            <h2>Welcome Back!</h2>
            <p>Sign in to your account</p>
            <form>
              <input type="email" placeholder="Email" className="input-field" required />
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  <input type="checkbox" />Remember me
                </label>
                <a href="/" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="login-button" onClick={handleClick}>
                Sign In
              </button>
            </form>

            <div className="or-divider">Or Sign in with</div>
            <div className="social-login">
              <button className="google-btn"><FcGoogle className="google-icon" /></button>
              <button className="apple-btn"><BsApple className="apple-icon" /></button>
            </div>

            <p className="register-text">
              Don't have an account? <span  className="register-link" onClick={handleSignup}>Register</span>
            </p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <h1 className="text">
          Revolutionize Healthcare <br /> Management Effortlessly!
        </h1>
        <p className="quote">
          Effortlessly manage appointments, <br />
          health records, and patient <br />
          interactions with our all-in-one <br />
          healthcare management platform.
        </p>
      </div>
    </div>
  );
};

export default Login;
