import React, { useState, useEffect } from "react";
import "../styles/Inbox.css";
import { FaBars } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../Images/medicalshala.png";
import profile1 from "../Images/profile1.png";
import encounter from "../Images/encounter.png";
import doctor from "../Images/doctor&clinic.png";
import prescription from "../Images/prescription.png";
import bedallotment from "../Images/bed-allotment.png";
import wallet from "../Images/wallet.png";
import history from "../Images/history.png";
import campaign from "../Images/campaign.png";
import settings from "../Images/settings.png";
import help from "../Images/help-faq.png";
import appointment from "../Images/appointment.png";
import inbox from "../Images/inbox.png";
import askai from "../Images/askai.png";
import { useNavigate } from "react-router-dom"; 
import { IoArrowBack } from "react-icons/io5";

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

const chatData = {
  "Aarav": [
    { sender: "patient", text: "Doctor, my shoulder still hurts.", time: "09:00" },
    { sender: "doctor", text: "Try an X-ray to check for issues.", time: "09:15" }
  ],
  "Ishita": [
    { sender: "patient", text: "I feel dizzy, should I do a test?", time: "10:00" },
    { sender: "doctor", text: "Yes, let's do a blood test.", time: "10:15" }
  ],
  "Vihaan": [
    { sender: "patient", text: "Can you confirm my appointment?", time: "08:30" },
    { sender: "doctor", text: "Yes, it's scheduled for tomorrow.", time: "08:45" }
  ],
  "Meera": [
    { sender: "patient", text: "Is it safe to continue the meds?", time: "12:00" },
    { sender: "doctor", text: "Yes, but follow the dosage strictly.", time: "12:15" }
  ]
};


const Inbox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-icon")) {
        setSidebarOpen(false);
      }
    };
  
    if (window.innerWidth <= 768) {
      document.addEventListener("click", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);
  
  
  const navigate= useNavigate();
 

  const handleAppointment =()=>{
    navigate("/appointment");
  }
  const handleAskai = () =>{
    navigate("/askai");
  }
  const handleEncounter = () =>{
    navigate("/encounter");
  }
  const handlePrescription = () =>{
    navigate("/prescription");
  }
  const handleDoctorClinic = () =>{
    navigate("/doctorclinic");
  }
  const handleScheduleAppointment = () =>{
    navigate("/scheduleappointment");
  }
  const handleBedAllotment = () =>{
    navigate("/bedallotment");
  }
  const handlePayment = () =>{
    navigate("/payment");
  }
  const handleChatSelect = (name) => {
    setSelectedUser(name);
    setSelectedChat(chatData[name] || [{ sender: "system", text: "No previous messages available.", time: "" }]);
    setIsChatOpen(true);
  };
  
  const handleBackToInbox = () => {
    setIsChatOpen(false); // Go back to chat list
  };
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="inbox-container">
      <>
    {/* Menu button (visible only in mobile) */}
    {isMobile && <FiMenu className="menu-icon" onClick={toggleSidebar} />}

    {/* Sidebar: Adjust content based on screen size */}
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {!isMobile && <img src={logo} alt="MedicalShala Logo" className="logo" />}
      {!isMobile && <button className="schedule-btn" onClick={handleScheduleAppointment}>Schedule Appointment</button>}

      <nav>
        <ul>
          {isMobile ? (
            <>
              <li><img src={profile1} alt="profile-icon" className="sidebar-logos"/> My Profile</li>
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li onClick={handleDoctorClinic}><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li onClick={handlePrescription}><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li onClick={handleBedAllotment}><img src={bedallotment} alt="bed-allotment" className="sidebar-logos"/> Bed Allotment</li>
              <li onClick={handlePayment}><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
              <li><img src={settings} alt="settings-icon" className="sidebar-logos"/> Settings</li>
              <li><img src={help} alt="help&faq-icon" className="sidebar-logos"/> Helps & FAQs</li>
            </>
          ) : (
            <>
              <li onClick={handleAppointment}><img src={appointment} alt="appointment-icon" className="sidebar-logos"/> Appointment</li>
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li className="active"><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
              <li onClick={handleAskai}><img src={askai} alt="askai-icon" className="sidebar-logos"/> Ask AI</li>
              <li onClick={handlePrescription}><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li onClick={handleDoctorClinic}><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li onClick={handleBedAllotment}><img src={bedallotment} alt="bedallotment-icon" className="sidebar-logos"/> Bed Allotment</li>
              <li onClick={handlePayment}><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  </>

      {/* Inbox Section */}
      <div className={`inbox-section ${isChatOpen ? "hidden" : ""}`}>
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
            <div key={index} className={`inbox-item ${item.priority.toLowerCase()}`} onClick={() => handleChatSelect(item.name)}>
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
      <div className={`chat-section ${isChatOpen ? "visible" : "hidden"}`}>
        <div className="chat-header">
          <button className="back-btn" onClick={handleBackToInbox}>
            <IoArrowBack />
          </button>
          <p className="chat-title">{selectedUser ? `Chat with ${selectedUser}` : "Select a chat"}</p>
        </div>

        <div className="chat-block">
          {selectedChat.length > 0 ? (
            selectedChat.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            ))
          ) : (
            <p className="no-chat">No messages yet</p>
          )}
        </div>


  <div className="chat-footer">
    <input type="text" placeholder="Type here..." />
    <button className="send-btn">Send</button>
  </div>
</div>

{/* Bottom Navigation (for Mobile) */}
{!sidebarOpen && (
  <div className="bottom-nav">
    <div className="nav-item" onClick={handleAppointment}>
      <img src={appointment} alt="home-icon" className="nav-icon" />
      <span>Home</span>
    </div>
    <div className="nav-item">
      <img src={inbox} alt="inbox-icon" className="nav-icon"/>
      <span>Inbox</span>
    </div>
    <div className="nav-item">
      <img src={askai} alt="ask-ai" className="nav-icon" onClick={handleAskai}/>
      <span>Ask AI</span>
    </div>
  </div>
)}

    </div>
  );
};

export default Inbox;
