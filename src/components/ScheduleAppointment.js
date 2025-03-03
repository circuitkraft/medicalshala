import React, { useState,useEffect } from "react";
import "../styles/ScheduleAppointment.css";
import "../styles/Encounter.css";
import { useNavigate } from "react-router-dom"; 
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
import { FiMenu } from "react-icons/fi";
import { BsTelephone, BsChat } from "react-icons/bs";
import profile from "../Images/profile.jpeg";


const ScheduleAppointment = () => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReason] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [contactNumber, setContactNumber] = useState("");
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
    const handlePrescription = () =>{
        navigate("/prescription");
    }
    const handleDoctorClinic = () =>{
        navigate("/doctorclinic");
    }
    const handleScheduleAppointment = () =>{
      navigate("/scheduleappointment");
    }
    const handleEncounter = () =>{
        navigate("/encounter");
    }
    const handlePaymentProcess = () =>{
        navigate("/paymentprocess")
    }
    const handleBedAllotment = () =>{
      navigate("/bedallotment");
    }
    const handlePayment = () =>{
      navigate("/payment");
    }
    const isMobile = window.innerWidth <= 768;
    const isFormComplete = () => {
        return (
          patientName.trim() !== "" &&
          age.trim() !== "" &&
          gender.trim() !== "" &&
          reason.trim() !== "" &&
          doctorName.trim() !== "" &&
          hospitalName.trim() !== "" &&
          date.trim() !== "" &&
          slot.trim() !== "" &&
          contactNumber.trim() !== ""
        );
      }

  return (
    <div className="appointment-container">
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
              <li onClick={handleAppointment} className="active" ><img src={appointment} alt="appointment-icon" className="sidebar-logos"/> Appointment</li>
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li onClick={handleInbox}><img src={inbox} alt="inbox-icon" className="sidebar-logos"/> Inbox</li>
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
  <div className="main-content">
        <div className="header">
          <h2>
            <strong>Appointments</strong> &gt; Schedule Appointment
          </h2>
          <img
            src={profile} 
            className="profile-pic"
            alt="Profile"
          />
        </div>
        

      {/* Patient Details */}
      <div className="section">
          <h3>Patient Details</h3>
          <div className="input-group">
            <input
              type="text"
              placeholder="Patient’s Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div className="gender-group">
              <label>Gender:</label>
              <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
              <span>Male</span>
              <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
              <span>Female</span>
            </div>
          </div>
          <textarea placeholder="Reason for appointment" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>


      {/* Doctor Details */}
      <div className="section">
          <h3>Doctor Details</h3>
          <div className="input-group">
            <select value={doctorName} onChange={(e) => setDoctorName(e.target.value)}>
              <option>Doctor’s Name</option>
              <option value="Dr. Priyam">Dr. Priyam</option>
              <option value="Dr. Yash">Dr. Yash</option>
              <option value="Dr. Arjun">Dr. Arjun</option>
              <option value="Dr. Priya">Dr. Priya</option>
              <option value="Dr. Raj">Dr. Raj</option>
              <option value="Dr. Sahil">Dr. Sahil</option>
              <option value="Dr. Meera">Dr. Meera</option>
              <option value="Dr. Ritu">Dr. Ritu</option>
            </select>
            <select value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}>
              <option>Hospital’s Name</option>
              <option value="">Hospital’s Name</option>
              <option value="City Hospital">City Hospital</option>
              <option value="Medicare Clinic">Medicare Clinic</option>
            </select>
          </div>
          <div className="input-group">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <select value={slot} onChange={(e) => setSlot(e.target.value)}>
              <option>Select Slot</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          </div>

      {/* Contact Number */}
      <div className="section">
          <h3>Contact Number</h3>
          <input type="text" placeholder="+91 00000 00000" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </div>


      {/* Assistance Section */}
      <div className="assistance">
          <p>
            <strong>Need Assistance?</strong><br />
            Our support team is here to help you with appointment scheduling. Reach out anytime for quick and reliable assistance!
          </p>
          <div className="icons">
            <BsTelephone className="icon" />
            <BsChat className="icon" />
          </div>
        </div>

      {/* Schedule Appointment Button */}
      <button className={`schedule1-btn ${isFormComplete() ? "active" : ""}` } disabled={!isFormComplete()} onClick={handlePaymentProcess}>
          Schedule Appointment
        </button>
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

export default ScheduleAppointment;
