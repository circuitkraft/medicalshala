import React, { useState, useEffect } from "react";
import "../styles/Payment.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Cell } from "recharts";
import profilePic from "../Images/profile.jpeg"; 
import { FiMenu } from "react-icons/fi";
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


const revenueData = [
  { day: "Mon", revenue: 30000 },
  { day: "Tue", revenue: 28000 },
  { day: "Wed", revenue: 35000 },
  { day: "Thr", revenue: 26000 },
  { day: "Fri", revenue: 40000 },
  { day: "Sat", revenue: 15000 },
  { day: "Sun", revenue: 10000 },
];

const modeOfPayment = [
  { name: "Cash Payment", percentage: 22, color: "#3b82f6" },
  { name: "Credit/Debit Card", percentage: 28, color: "#60a5fa" },
  { name: "UPI Payment", percentage: 37, color: "#93c5fd" },
  { name: "Net Banking", percentage: 10, color: "#bfdbfe" },
  { name: "Insurance", percentage: 12, color: "#dbeafe" },
];

const revenueCategory = [
  { name: "Consultations", value: 30, color: "#ffcc00" },
  { name: "Surgeries", value: 22, color: "#ff6699" },
  { name: "Lab Tests", value: 18, color: "#9933ff" },
  { name: "Pharmacy", value: 20, color: "#66ccff" },
  { name: "Others", value: 10, color: "#ff9966" },
];

const transactionData = [
  { id: "TXN001", name: "Nikkita", date: "11/01/25", amount: "₹5k", status: "Paid", mode: "UPI" },
  { id: "TXN072", name: "Harish", date: "01/01/25", amount: "₹75k", status: "Paid", mode: "Credit" },
  { id: "-", name: "Jesika", date: "-", amount: "₹8k", status: "Pending", mode: "UPI" },
  { id: "TXN023", name: "Nithya", date: "30/12/25", amount: "₹4.2k", status: "Paid", mode: "Cash" },
];

const Payment = () => {
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
    <div className="payment-container">
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
              <li onClick={handlePayment} className="active"><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
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
              <li onClick={handleBedAllotment}><img src={bedallotment} alt="bedallotment-icon" className="sidebar-logos"/> Bed Allotment</li>
              <li onClick={handlePayment} className="active"><img src={wallet} alt="wallet-icon" className="sidebar-logos"/> Payment</li>
              <li><img src={history} alt="history-icon" className="sidebar-logos"/> History</li>
              <li><img src={campaign} alt="campaign-icon" className="sidebar-logos"/> Campaign</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  </>
  <div className="payment-wrapper">
      <div className="payment-header">
        <h3>Payment & Revenue</h3>
        <div className="header-actions">
          <button className="date-filter">📅 Last 30 days</button>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
      </div>

      <div className="stats-overview">
        <div className="revenue">
          <h4>Total Revenue</h4>
          <span className="revenue-amount">₹2,50,000</span>
          <br/>
          <span className="revenue-percentage up">+25%</span>
        </div>
        <div className="stat-box">
          <h4>Net Profit</h4>
          <span className="amount">₹1,50,000</span>
          <span className="percentage up">+25%</span>
        </div>
        <div className="stat-box">
          <h4>Patients</h4>
          <span className="amount">30,756</span>
          <span className="percentage up">+15%</span>
        </div>
        <div className="stat-box green">
          <h4>Completed Payment</h4>
          <span className="amount">₹1,50,000</span>
        </div>
        <div className="stat-box orange">
          <h4>Pending Payment</h4>
          <span className="amount">₹30,000</span>
        </div>
        <div className="stat-box red">
          <h4>Refunded Amount</h4>
          <span className="amount">₹10,000</span>
        </div>
      </div>

      <div className="charts-container">
        <div className="revenue-chart">
          <h3>Revenue Analysis</h3>
          {isMobile? (
          <BarChart width={350} height={250} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#3b82f6" />
          </BarChart>
          ) : (
            <BarChart width={500} height={250} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#3b82f6" />
          </BarChart>
          )}
        </div>

        <div className="mode-of-payment">
          <h3>Mode of Payment</h3>
          {modeOfPayment.map((mode, index) => (
            <div key={index} className="payment-mode">
              <span>{mode.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${mode.percentage}%`, backgroundColor: mode.color }}></div>
              </div>
              <span>{mode.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="transaction-details">
        <h3>Transaction Details</h3>
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Mode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((txn, index) => (
              <tr key={index}>
                <td>{txn.id}</td>
                <td>{txn.name}</td>
                <td>{txn.date}</td>
                <td>{txn.amount}</td>
                <td className={txn.status.toLowerCase()}>{txn.status}</td>
                <td>{txn.mode}</td>
                <td>
                  {txn.status === "Pending" ? <button className="remind">Remind</button> : <button className="receipt">Receipt</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="revenue-category">
        <h3>Revenue by Category</h3>
        <PieChart width={200} height={200}>
          <Pie data={revenueCategory} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value" label>
            {revenueCategory.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
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

export default Payment;
