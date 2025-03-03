import React, { useState, useEffect } from "react";
import "../styles/BedAllotment.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
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
import patient from "../Images/patient.png";
import { PieChart, Pie, Cell } from 'recharts';
const bedData = [
  { id: "B101", name: "Ramesh", ward: "ICU", date: "12/01/25", status: "Occupied" },
  { id: "B102", name: "Adhira", ward: "Maternity", date: "10/01/25", status: "Occupied" },
  { id: "B103", name: "-", ward: "General", date: "-", status: "Available" },
  { id: "B104", name: "-", ward: "General", date: "-", status: "Maintenance" },
];

const chartData = [
  { day: "Mon", ICU: 8, General: 5, Private: 4, Maternity: 2 },
  { day: "Tue", ICU: 9, General: 6, Private: 5, Maternity: 3 },
  { day: "Wed", ICU: 10, General: 7, Private: 6, Maternity: 3 },
  { day: "Thu", ICU: 8, General: 6, Private: 5, Maternity: 4 },
  { day: "Fri", ICU: 9, General: 8, Private: 7, Maternity: 3 },
  { day: "Sat", ICU: 11, General: 5, Private: 6, Maternity: 2 },
];

const BedAllotment = () => {
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
    const bedChartData = [
      { name: "Occupied", value: 120, color: "#FF0000" },
      { name: "Available", value: 50, color: "#00FF00" },
      { name: "Maintenance", value: 30, color: "#FFA500" },
    ];
  
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
    <div className="bed-allotment-container">
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
              <li onClick={handleBedAllotment} className="active"><img src={bedallotment} alt="bed-allotment" className="sidebar-logos"/> Bed Allotment</li>
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
              <li onClick={handleDoctorClinic}><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li onClick={handleBedAllotment} className="active"><img src={bedallotment} alt="bedallotment-icon" className="sidebar-logos"/> Bed Allotment</li>
              <li onClick={handlePayment}><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  </>
  <div className="bed-allotment-content">
  <div className="header">
    <h2>Bed Allotment Details</h2> <img src={profilePic} alt="Profile" className="profile" />
    <div className="header-actions">
      <input type="text" placeholder="Search by patient's name, bed number, department" className="search-input" />
        
      
    </div>
    </div>
      <div className="patients-admitted">
        <h3>Overview of Patients Admitted</h3>
        <br/>
        <div className="overview">
  <div className="stat-box">
    <div className="stat-content">
      <div className="patient">
        <img src={patient} alt="Total Patients" />
      </div>
      <div className="stat-text">
        Total Patients <br />
        <span>120</span>
      </div>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-content">
      <div className="patient">
        <img src={patient} alt="New Admission" />
      </div>
      <div className="stat-text">
        New Admission <br />
        <span>30</span>
      </div>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-content">
      <div className="patient">
        <img src={patient} alt="Discharged" />
      </div>
      <div className="stat-text">
        Discharged <br />
        <span>25</span>
      </div>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-content">
      <div className="patient">
        <img src={patient} alt="Remaining" />
      </div>
      <div className="stat-text">
        Remaining <br />
        <span>95</span>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className="chart-bed-container">
  <div className="chart-container">
    <h3>Department Occupied</h3>
    {isMobile ? (<LineChart width={300} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="ICU" stroke="#ff00ff" />
      <Line type="monotone" dataKey="General" stroke="#00ff00" />
      <Line type="monotone" dataKey="Private" stroke="#0000ff" />
      <Line type="monotone" dataKey="Maternity" stroke="#ff6600" />
    </LineChart>
    ) : (
      <LineChart width={600} height={250} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="ICU" stroke="#ff00ff" />
      <Line type="monotone" dataKey="General" stroke="#00ff00" />
      <Line type="monotone" dataKey="Private" stroke="#0000ff" />
      <Line type="monotone" dataKey="Maternity" stroke="#ff6600" />
    </LineChart>
    )}
  </div>

  <div className="bed-occupancy">
    <h3>Bed Occupancy</h3>
    <ul>
      <li>
        <span className="bed-type">General Beds</span>
        <div className="progress-bar"><div className="progress" style={{ width: "85%" }}></div></div>
        <span className="percentage">85%</span>
      </li>
      <li>
        <span className="bed-type">ICU Beds</span>
        <div className="progress-bar"><div className="progress" style={{ width: "83%" }}></div></div>
        <span className="percentage">83%</span>
      </li>
      <li>
        <span className="bed-type">Private Beds</span>
        <div className="progress-bar"><div className="progress" style={{ width: "80%" }}></div></div>
        <span className="percentage">80%</span>
      </li>
      <li>
        <span className="bed-type">Isolation Beds</span>
        <div className="progress-bar"><div className="progress" style={{ width: "70%" }}></div></div>
        <span className="percentage">70%</span>
      </li>
      <li>
        <span className="bed-type">Special Care Beds</span>
        <div className="progress-bar"><div className="progress" style={{ width: "36%" }}></div></div>
        <span className="percentage">36%</span>
      </li>
    </ul>
  </div>
</div>


<div className="bed-analysis-container">
  {/* Bed Table */}
  <div className="bed-table">
    <table>
      <thead>
        <tr>
          <td>Bed ID</td>
          <td>Patient Name</td>
          <td>Ward</td>
          <td>Date</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {bedData.map((bed) => (
          <tr key={bed.id}>
            <td>{bed.id}</td>
            <td>{bed.name}</td>
            <td>{bed.ward}</td>
            <td>{bed.date}</td>
            <td className={bed.status.toLowerCase()}>{bed.status}</td>
            <td>
              {bed.status === "Occupied" && <button className="discharge">Discharge</button>}
              {bed.status === "Available" && <button className="allocate">Allocate</button>}
              {bed.status === "Maintenance" && <button className="update">Update</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pie Chart for Bed Analysis */}
  <div className="bed-analysis-chart">
  <h3>Total Bed Analysis</h3>
  <PieChart width={220} height={220}>
    <Pie
      data={bedChartData}
      cx="50%"
      cy="50%"
      outerRadius={70}  // Reduced size
      fill="#8884d8"
      dataKey="value"
      label
    >
      {bedChartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</div>

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

export default BedAllotment;
