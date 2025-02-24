import React, { useState } from "react";
import "../styles/Inbox.css";
import { FaBars } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../images/medicalshala.png";
import profile1 from "../images/profile1.png";
import encounter from "../images/encounter.png";
import doctor from "../images/doctor&clinic.png";
import prescription from "../images/prescription.png";
import bedallotment from "../images/bed-allotment.png";
import wallet from "../images/wallet.png";
import history from "../images/history.png";
import campaign from "../images/campaign.png";
import settings from "../images/settings.png";
import help from "../images/help-faq.png";
import appointment from "../images/appointment.png";
import inbox from "../images/inbox.png";
import askai from "../images/askai.png";
import { useNavigate } from "react-router-dom"; 

const inboxData = [
  { name: "Aarav", priority: "High", message: "You: Of course, I'll do..." },
  { name: "Ishita", priority: "High", message: "I've been experiencing..." },
  { name: "Vihaan", priority: "High", message: "Can you please confirm..." },
  { name: "Meera", priority: "Medium", message: "Is it safe to continue the..." },
  { name: "Aditya", priority: "Low", message: "The prescribed ointment..." },
  { name: "Kavya", priority: "", message: "I've completed the antib..." },
  { name: "Ananya", priority: "", message: "Thank you for the prescri..." },
  { name: "Rohan", priority: "", message: "I need an urgent appoint..." },
];

const chatData = [
  {
    date: "02-01-2025",
    messages: [
      { sender: "patient", text: "Doctor, the pain in my shoulder hasn’t gone away even after applying the ointment you prescribed. Should I consider getting an X-ray?", time: "09:00" },
      { sender: "doctor", text: "Of course, I’ll do a detailed evaluation to determine the issue. If necessary, we’ll arrange for an X-ray and explore alternative treatments.", time: "09:15" },
    ],
  },
  {
    date: "10-01-2025",
    messages: [
      { sender: "patient", text: "Doctor, I’ve been feeling dizzy and lightheaded since yesterday. Should I get some tests done?", time: "10:00" },
      { sender: "doctor", text: "Of course, I’ll do a thorough check-up to understand the cause. Let’s also run a blood test and monitor your blood pressure to ensure everything is fine.", time: "10:15" },
    ],
  },
];

const Inbox = () => {
  const [selectedChat, setSelectedChat] = useState(chatData);
   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const navigate= useNavigate();
 

  const handleAppointment =()=>{
    navigate("/appointment");
  }
  const handleAskai = () =>{
    navigate("/askai");
  }

  const isMobile = window.innerWidth <= 768;
  return (
    <div className="inbox-container">
      <>
    {/* Menu button (visible only in mobile) */}
    {isMobile && <FiMenu className="menu-icon" onClick={toggleSidebar} />}

    {/* Sidebar: Adjust content based on screen size */}
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {!isMobile && <img src={logo} alt="MedicalShala Logo" className="logo" />}
      {!isMobile && <button className="schedule-btn">Schedule Appointment</button>}

      <nav>
        <ul>
          {isMobile ? (
            <>
              <li><img src={profile1} alt="profile-icon" className="sidebar-logos"/> My Profile</li>
              <li><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li><img src={bedallotment} alt="bed-allotment" className="sidebar-logos"/> Bed Allotment</li>
              <li><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
              <li><img src={settings} alt="settings-icon" className="sidebar-logos"/> Settings</li>
              <li><img src={help} alt="help&faq-icon" className="sidebar-logos"/> Helps & FAQs</li>
            </>
          ) : (
            <>
              <li onClick={handleAppointment}><img src={appointment} alt="appointment-icon" className="sidebar-logos"/> Appointment</li>
              <li><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li className="active"><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
              <li onClick={handleAskai}><img src={askai} alt="askai-icon" className="sidebar-logos"/> Ask AI</li>
              <li><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li><img src={bedallotment} alt="bedallotment-icon" className="sidebar-logos"/> Bed Allotment</li>
              <li><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  </>

      {/* Inbox Section */}
      <div className="inbox-section">
        <div className="inbox-header">
          <h3>Inbox</h3>
          <button className="menu-btn"><FaBars /></button>
        </div>
        <div className="tab-buttons">
          <button>Internal</button>
          <button>External</button>
          <button className="active">Patient</button>
        </div>
        <div className="inbox-list">
          {inboxData.map((item, index) => (
            <div key={index} className={`inbox-item ${item.priority.toLowerCase()}`}>
              <div className="inbox-info">
                <strong>{item.name}</strong>
                {item.priority && <span className={`priority ${item.priority.toLowerCase()}`}>{item.priority}</span>}
              </div>
              <p>{item.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        {selectedChat.map((chat, index) => (
          <div key={index} className="chat-block">
            <p className="chat-date">{chat.date}</p>
            {chat.messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="chat-footer">
          <input type="text" placeholder="Type here..." />
          <button className="send-btn">Send</button>
        </div>
      </div>
      {!sidebarOpen && (
          <div className="bottom-nav">
          <div className="nav-item" onClick={() => navigate("/")}>
            <img src={appointment} alt="home-icon" className="nav-icon"/>
            <span>Home</span>
          </div>
          <div className="nav-item">
            <img src={inbox} alt="inbox-icon" className="nav-icon"/>
            <span>Inbox</span>
          </div>
          <div className="nav-item">
            <img src={askai} alt="ask-ai" className="nav-icon"/>
            <span>Ask AI</span>
          </div>
        </div>
        
        )}
    </div>
  );
};

export default Inbox;
