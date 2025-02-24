import React from "react";
import "../styles/Appointment.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import profilePic from "../images/profile.jpeg"; 
import logo from "../images/medicalshala.png";
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
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md";
import { PiTimerThin } from "react-icons/pi";


const appointments = [
  {
    time: "10:00 AM",
    status: "ONGOING",
    name: "Aarav",
    id: "9374",
    age: "30",
    gender: "Male",
    lastVisit: "Visited 1 month ago",
    image: "https://s3-alpha-sig.figma.com/img/1a7a/62ea/63e0688d83dc245b794c9e6d9c3d8c8b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SOsRbEkK0fkSoS4zNeZ6YSBJJq-guJlfh8mFRmMNHVkXc0yQoenx~2X9SdYA1TFMuWQHipbBcto9If2K33OrUBUU2WNKxWR3MZ58n2u~sPOUls1FaP20hh7VmYOgbT5nTB5QsM8SP5pBOb1KbKK1PSMC56T3rBgC3rJEpgKjVfee2lz-IYx66L-ade6uOBSfIRX2w04AOq0b0xdi0ZnIHpoor8Lv12Ih1mdfk4~gF4v6e7QDqYk2CCGJvohCHHh009wc3GSJun3iLunY6RCcrUiOs4K9zOmZKfEugfJ5K~VNDVcGv7szggaoVUFGoyrutZFixCjyrXW4heLNrCeApw__",
  },
  {
    time: "10:30 AM",
    status: "UPCOMING",
    name: "Ishita",
    id: "9723",
    age: "28",
    gender: "Female",
    lastVisit: "Visited 1 month ago",
    image: "https://s3-alpha-sig.figma.com/img/e650/07e7/98c755e50682cfe3a6a7bc90d5a8e699?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EF-PWzbX6TBEE7AMOTU8HlZbmBV9l4DdzgyDNzimCmX8ADn2NOuxGkI7JFE6NZYDkzuMXNEKjv0iFl4kUpQxib41MEdltbrkemL-gh-ZNIuPvjtgQQvvG9yfHhps95L8-s1SPk29D~GZBwZBACAuG1LvUK2NXEAWOxahPbui2GQqO5bUgta0XavnuH6-uCEqz~-EPemI5Kfdy5XMmfXcU7eXIkK5PSgux~oYAjO9cPPTMZRiQfFiXWm7UDNc18G1LCSovkmgIfnKaaZ1zlcO0tRbnKL9uhG4aYLfsWk1hjSQntCuNewWX488wF66SHMFv7FZVFNE-LDWL4SB8K~BNQ__",
  },
  {
    time: "11:00 AM",
    status: "UPCOMING",
    name: "Kavya",
    id: "8634",
    age: "24",
    gender: "Female",
    lastVisit: "Visited 1 month ago",
    image: "https://s3-alpha-sig.figma.com/img/78e7/8a1b/d3c7091ded7a4e097d5a2557917d5952?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ORVxIg4zh4YsmmiUZdckjbzhpOthhpULG0xRaQBwrbsMyDvkRIjzIbTvXtDdp-jpsX8CDWSVr85Lh3BkgMsfGb0kDOA5xOuu7uXgyJuhfOwU3XCO3osdW8o~yjg1J82xjXgYwi4JjPzToKzgyW4WJicR-yjaCO2LR7Oqgu6ePe16tp6yVtb1jDfUzUQV9lwYAjz83FoEw9nS4BA7JQxnnVqHm~JyKLIfqlmUeA3W~Oisk7kxjlLbABv5X6UkGrKbtMW5faanSKIOgCtJ14eWG6s2f-1tXuukoWfkQonTFC1rPOaYaQm6xj2CNKUlwG8WZVZ99je4WV-yYsBcaYsKwA__",
  },
  {
    time: "11:30 AM",
    status: "UPCOMING",
    name: "Aditya",
    id: "7364",
    age: "26",
    gender: "Male",
    lastVisit: "Visited 1 month ago",
    image: "https://s3-alpha-sig.figma.com/img/518d/6c96/caa2e749d1260e9c42b652eb0745cefb?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gEHHrRatWLGEqmV-isLVKHDrbArdPnR1neR~YvXUR74bbf1BlSpbRxcF3d4VCXnrVNqcsWs2kUj4p8uoh8Hfncxjt4O8TKCyl-Ih9cPvPn2w3JLblWA53wX~9bWV5oWGLSEfNR0sriXsZkzWykraIR613aQJYXqrvi4rVllTMJMnJsh7bVPndOoEcDvfiWk~JVORAntJBjPPoSa8Sfx048hMiGVjbxwakQV8QlaNLqBpTthsiCNa-QW0DUULbOm7qf2DOpxv7mrJsc5QDqDSZ3ReFM0T0Al4tVxlfYE9V6Nnn5acwBvQ96x4tqTvwCu7q1QFP3w4d5YGpvR4hPe8fw__",
  },
];

const Appointment = () => {
    const navigate=useNavigate();
    const handleAskai =() =>{
        navigate("/askai");
    }
    const handleInbox = () =>{
        navigate("/inbox");
    }
  return (
    <div className="appointment-container">
      <div className="sidebar">
      <img src={logo} alt="MedicalShala Logo" className="logo" />
        <button className="schedule-btn">Schedule Appointment</button>
        <nav>
          <ul>
            <li className="active"><IoCalendarOutline className="sidebar-logos"/> Appointment</li>
            <li><IoPersonOutline className="sidebar-logos"/> Encounter</li>
            <li onClick={handleInbox} style={{ cursor: "pointer" }}> 
              <GoMail className="sidebar-logos"/> Inbox
            </li>
            <li onClick={handleAskai}><LuHandHelping className="sidebar-logos"/> Ask AI</li>
            <li><HiOutlineNewspaper className="sidebar-logos"/> Prescription</li>
            <li><FaUserDoctor className="sidebar-logos"/> Doctor & Clinic</li>
            <li><MdOutlineBallot className="sidebar-logos"/> Bed Allotment</li>
            <li><IoWalletOutline className="sidebar-logos"/> Payment</li>
            <li><GoHistory className="sidebar-logos"/> History</li>
            <li><GrAnnounce className="sidebar-logos"/> Campaign</li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
      <div className="header">
          <h2>Appointments <IoMdMenu className="menu"/> <img src={profilePic} className="profile"/></h2> 
        </div>

        <div className="stats">
            
          <div className="stat-box">
            <h3>24</h3>
            <p>ALL PATIENTS</p>
          </div>
          <div style={{ width: "2px", height: "70px", background: "#969696" }}></div>

          <div className="stat-box">
            <h3 className="upcoming-patient">12</h3>
            <p>UPCOMING</p>
          </div>
          <div style={{ width: "2px", height: "70px", background: "#969696" }}></div>
          <div className="stat-box">
            <h3 className="completed">8</h3>
            <p>COMPLETED</p>
          </div>
          <div style={{ width: "2px", height: "70px", background: "#969696" }}></div>
          <div className="stat-box">
            <h3 className="missed">4</h3>
            <p>MISSED</p>
          </div>
        </div>

        <div className="appointment-actions">
          <button className="add-btn"><FaPlus /> Add Appointment</button>
          <button className="video-btn"><IoVideocamOutline /> Video Consultation</button>
        </div>

        <h3 className="date-header">
  Today, 10 Jan 2024  
  <IoChevronBackCircle className="arrow-back"/> 
  <FaCircleChevronRight className="arrow-next"/> 
  
  {/* Dropdowns aligned to the right */}
  <select className="dropdown-record">
    <option>All Records</option>
    <option>Completed</option>
    <option>Upcoming</option>
    <option>Missed</option>
  </select>

  <select className="dropdown">
    <option>Daily</option>
    <option>Weekly</option>
    <option>Monthly</option>
  </select>
</h3>


        <div className="appointments-list">
          {appointments.map((apt, index) => (
            <div className="appointment-card" key={index}>
              <img src={apt.image} alt="user" className="profile-pic" />
              <div className="appointment-info">
                <p className={`status ${apt.status.toLowerCase()}`}>
                  {apt.time} • {apt.status}
                </p>
                <h4>{apt.name}</h4>
                <p className="details">
                <MdPeopleOutline className="people"/> {apt.id} &nbsp;&nbsp;&nbsp;&nbsp;<IoPersonOutline className="person"/> {apt.age},{apt.gender} &nbsp;&nbsp;&nbsp;&nbsp; <PiTimerThin className="timer"/> {apt.lastVisit}
                </p>
              </div>
              <BsThreeDotsVertical className="menu-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
