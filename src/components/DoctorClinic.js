import React, { useState, useEffect } from "react";
import "../styles/DoctorClinic.css";
import Clinic from "../components/Clinic";
import { FaStar } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 
import logo from "../Images/medicalshala.png";
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
import doctor1 from "../Images/doctor1.png";
import doctor2 from "../Images/doctor2.png";
import doctor3 from "../Images/doctor3.png";
import doctor4 from "../Images/doctor4.png";
import doctor5 from "../Images/doctor5.png";
import doctor6 from "../Images/doctor6.png";
import doctor7 from "../Images/doctor7.png";
import doctor8 from "../Images/doctor8.png";


const doctors = [
  {
    name: "Dr. Priyam",
    specialty: "Gynecologist",
    clinic: "Women's Health Clinic - Pune",
    experience: "11 years Experience",
    timings: "Tue, Thu, Sat, 2 PM - 5 PM",
    rating: 4.9,
    image: doctor1,
  },
  {
    name: "Dr. Yash",
    specialty: "Neurology",
    clinic: "Brain Health Clinic - Kolkata",
    experience: "9 years Experience",
    timings: "Mon-Fri, 3 PM - 6 PM",
    rating: 4.8,
    image: doctor2,
  },
  {
    name: "Dr. Arjun",
    specialty: "General Medicine",
    clinic: "Sunshine Health Clinic - Chennai",
    experience: "8 years Experience",
    timings: "Mon-Fri, 10 AM - 6 PM",
    rating: 4.8,
    image: doctor3,
  },
  {
    name: "Dr. Priya",
    specialty: "Pediatrics",
    clinic: "Little Hearts Clinic - Chennai",
    experience: "5 years Experience",
    timings: "Tue, Thu, Sat, 9 AM - 1 PM",
    rating: 4.5,
    image: doctor4,
  },
  {
    name: "Dr. Raj",
    specialty: "Orthopedics",
    clinic: "Heal Well Clinic - Bangalore",
    experience: "10 years Experience",
    timings: "Mon, Wed, Fri, 2 PM - 5 PM",
    rating: 4.8,
    image: doctor5,
  },
  {
    name: "Dr. Sahil",
    specialty: "Cardiology",
    clinic: "HeartCare Clinic - Chennai",
    experience: "12 years Experience",
    timings: "Tue, Thu, Sat, 9 AM - 1 PM",
    rating: 4.9,
    image: doctor6,
  },
  {
    name: "Dr. Meera",
    specialty: "Dermatology",
    clinic: "Radiance Skin Clinic - Hyderabad",
    experience: "4 years Experience",
    timings: "Tue, Thu, Sat, 9 AM - 1 PM",
    rating: 4.6,
    image: doctor7,
  },
  {
    name: "Dr. Ritu",
    specialty: "Gynecology",
    clinic: "Women’s Wellness Clinic - Chennai",
    experience: "5 years Experience",
    timings: "Tue, Thu, Sat, 2 PM - 5 PM",
    rating: 4.5,
    image: doctor8,
  }
];


const DoctorClinic = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("doctor");
    
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
const handlePrescription = () =>{
    navigate("/prescription");
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
    <div className="doctor-clinic-container">
      
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
              <li onClick={handleDoctorClinic} className="active"><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
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
              <li onClick={handleInbox}><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
              <li onClick={handleAskai}><img src={askai} alt="askai-icon" className="sidebar-logos"/> Ask AI</li>
              <li onClick={handlePrescription}><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
              <li className="active"><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
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
      

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
        <h2>Doctor & Clinic <FiMenu className="menu"/> &nbsp;&nbsp;
        <img src={profilePic} className="profile" alt="profile"/></h2>
          
        </div>

        {/* Tabs */}
        <div className="tabs">
          <span
            className={activeTab === "doctor" ? "active" : ""}
            onClick={() => setActiveTab("doctor")}
          >
            Doctor
          </span>
          <span
            className={activeTab === "clinic" ? "active" : ""}
            onClick={() => setActiveTab("clinic")}
          >
            Clinic
          </span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by doctor's name, location, Specialization"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsFilter className="filter-icon" />
        </div>

        {/* Doctor List */}
        {activeTab === "doctor" ? (
          <div className="doctor-list">
            {doctors
              .filter((doctor) =>
                doctor.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((doctor, index) => (
                <div className="doctor-card" key={index}>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-img"
                  />
                  <div className="doctor-info">
                    <h3>
                      {doctor.name} <span>({doctor.specialty})</span>
                    </h3>
                    <p className="clinic">{doctor.clinic}</p>
                    <p>{doctor.experience}</p>
                    <p>{doctor.timings}</p>
                    <p className="rating">
                      Ratings: {doctor.rating} <FaStar className="star-icon" />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <Clinic search={search} /> // Render Clinic component when Clinic tab is selected
        )}
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

export default DoctorClinic;
