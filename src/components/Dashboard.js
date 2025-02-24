import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 768) { 
      const timer = setTimeout(() => {
        setFadeOut(true); 
        setTimeout(() => {
          navigate("/login"); 
        }, 1000); 
      }, 5000); 
      return () => clearTimeout(timer); 
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <div className={`dashboard-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="dashboard-content">
        <h1>Revolutionize Healthcare Management Effortlessly!</h1>
        <p>
          Effortlessly manage appointments, health records, and patient 
          interactions with our all-in-one healthcare management platform.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
