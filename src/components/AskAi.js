import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import profilePic from "../images/profile.jpeg"; 
import logo from "../images/medicalshala.png";
import "../styles/AskAi.css";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { LuHandHelping } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineBallot } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { GoShare } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";
import { MdMicNone } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const AskAi = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleClick = () => {
    navigate("/inbox"); // ✅ Navigate to Inbox page
  };

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

  return (
    <div className="ask-ai-container">
      <div className="sidebar">
        <img src={logo} alt="MedicalShala Logo" className="logo" />
        <button className="schedule-btn">Schedule Appointment</button>
        <nav>
          <ul>
            <li><IoCalendarOutline className="sidebar-logos"/> Appointment</li>
            <li><IoPersonOutline className="sidebar-logos"/> Encounter</li>
            <li onClick={handleClick} style={{ cursor: "pointer" }}> 
              <GoMail className="sidebar-logos"/> Inbox
            </li>
            <li className="active"><LuHandHelping className="sidebar-logos"/> Ask AI</li>
            <li><HiOutlineNewspaper className="sidebar-logos"/> Prescription</li>
            <li><FaUserDoctor className="sidebar-logos"/> Doctor & Clinic</li>
            <li><MdOutlineBallot className="sidebar-logos"/> Bed Allotment</li>
            <li><IoWalletOutline className="sidebar-logos"/> Payment</li>
            <li><GoHistory className="sidebar-logos"/> History</li>
            <li><GrAnnounce className="sidebar-logos"/> Campaign</li>
          </ul>
        </nav>
      </div>
      <div className="chat-section">
        <div className="chat-header">
          <h2>Ask AI</h2>
          <div className="profile-container">
            <FiMenu className="menu-icon" />
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <GoShare className="share"/>
        <PiShareFat className="forward"/>
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

        
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /> <IoMdLink className="link"/> <MdMicNone className="mic"/>
          <button onClick={sendMessage}>
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskAi;
