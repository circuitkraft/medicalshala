import React, { useState,useEffect  } from "react";
import { IoMdSend } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import profilePic from "../Images/profile.jpeg";
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
import "../styles/AskAi.css";
import { GoShare } from "react-icons/go";
import {  MdMicNone } from "react-icons/md";
import { PiShareFat } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AskAi = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

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
  const handleClick = () => {
    navigate("/inbox");
  };

  const handleAppointment = () => {
    navigate("/appointment");
  };
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
  const handleEncounter = () =>{
    navigate("/encounter");
  }
  const [messages, setMessages] = useState([
    { sender: "user", text: "What does this X-ray show?" },
    {
      sender: "ai",
      text: `**X-rays of the human knee**\n\n**Findings:**\n- Mild narrowing of the medial joint space, suggestive of early osteoarthritis.\n- Bone alignment is normal, with no fractures or dislocations.\n- No visible soft tissue swelling or calcifications.\n- Patella is well-positioned without subluxation.\n\n**Impressions:**\n- Early signs of osteoarthritis with no acute abnormalities.\n- Clinical correlation and further evaluation (e.g., MRI) recommended if symptoms persist.`,
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="ask-ai-container">
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
              <li onClick={handleDoctorClinic}><img src={profile1} alt="profile-icon" className="sidebar-logos"/> My Profile</li>
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
              <li onClick={handleClick}><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
              <li className="active"><img src={askai} alt="askai-icon" className="sidebar-logos"/> Ask AI</li>
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
      {/* Chat Section */}
      <div className={`chat-section ${sidebarOpen ? "blur-background" : ""}`}>
        <div className="chat-header">
          <h2>Ask AI</h2>
          <div className="profile-container">
            <FiMenu className="menu-icon" onClick={toggleSidebar} />
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <GoShare className="share" />
        <PiShareFat className="forward" />
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === "ai" && <BsChatDots className="ai-icon" />}
              <div className="message-content">
                <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br>") }} />
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)} />
          <IoMdLink className="link" />
          <MdMicNone className="mic" />
          <button onClick={sendMessage}>
            <IoMdSend />
          </button>
        </div>
        
        {!sidebarOpen && (
          <div className="bottom-nav">
          <div className="nav-item">
            <img src={appointment} alt="home-icon" className="nav-icon" onClick={handleAppointment}/>
            <span>Home</span>
          </div>
          <div className="nav-item" onClick={handleClick}>
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
    </div>
  );
};

export default AskAi;


