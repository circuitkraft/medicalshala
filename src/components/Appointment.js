import React,{useState,useEffect} from "react";
import "../styles/Appointment.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 
import logo from "../Images/medicalshala.png";
import { IoPersonOutline } from "react-icons/io5";
import profilePic from "../Images/profile.jpeg";
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
import { FaPlus } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md";
import { PiTimerThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";


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
  const [sidebarOpen, setSidebarOpen] = useState(false);
    
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
const handleInbox = () =>{
  navigate("/inbox");
}
const handleEncounter = () =>{
  navigate("/encounter");
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

const isMobile = window.innerWidth <= 768;
  
    
  return (
    <div className="appointment-container">
      <>
    {/* Menu button (visible only in mobile) */}
    {isMobile && <FiMenu className="menu-icon" onClick={toggleSidebar} />}

    {/* Sidebar: Adjust content based on screen size */}
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {!isMobile && <img src={logo} alt="MedicalShala Logo" className="logo" />}
      {!isMobile && <button className="schedule-btn"onClick={handleScheduleAppointment}>Schedule Appointment</button>}

      <nav>
        <ul>
          {isMobile ? (
            <>
              <li><img src={profile1} alt="profile-icon" className="sidebar-logos"/> My Profile</li>
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li onClick={handleDoctorClinic}><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li onClick={handleBedAllotment}><img src={bedallotment} alt="bed-allotment" className="sidebar-logos"/> Bed Allotment</li>
              <li onClick={handlePayment}><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
              <li><img src={settings} alt="settings-icon" className="sidebar-logos"/> Settings</li>
              <li><img src={help} alt="help&faq-icon" className="sidebar-logos"/> Helps & FAQs</li>
            </>
          ) : (
            <>
              <li onClick={handleAppointment} className="active"><img src={appointment} alt="appointment-icon" className="sidebar-logos"/> Appointment</li>
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li ><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
              <li onClick={handleAskai}><img src={askai} alt="askai-icon" className="sidebar-logos"/> Ask AI</li>
              <li ><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
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
      <div className="main-content">
      <div className="header">
          <h2>Appointment <img src={profilePic} className="profile" alt="profile"/></h2> 
        </div>

        {/* Desktop Layout (Visible on Larger Screens) */}
<div className="stats desktop-stats">
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

{/* Mobile Layout (Visible Only on Mobile Screens) */}
<div className="stats mobile-stats">
  {/* Left side: All Patients */}
  <div className="stat-box">
    <h3>24</h3>
    <p>ALL PATIENTS</p>
  </div>

  {/* Center Separator */}
  <div className="separator"></div>

  {/* Right side: Upcoming, Completed, Missed (stacked) */}
  <div className="right-stats">
    <div className="stat-box">
      <h3 className="upcoming-patient">12</h3>
      <p>UPCOMING</p>
    </div>
    <div className="stat-box">
      <h3 className="completed">8</h3>
      <p>COMPLETED</p>
    </div>
    <div className="stat-box">
      <h3 className="missed">4</h3>
      <p>MISSED</p>
    </div>
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
        {!sidebarOpen && (
          <div className="bottom-nav">
          <div className="nav-item">
            <img src={appointment} alt="home-icon" className="nav-icon" onClick={handleAppointment}/>
            <span>Home</span>
          </div>
          <div className="nav-item" onClick={handleInbox}>
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

export default Appointment;
