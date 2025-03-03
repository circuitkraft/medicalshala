import ellipse from "../Images/ellipse.jpg";
import add from "../Images/more 7.png";
import deletes from "../Images/trash 7.png";
import { useState, useEffect } from "react";
import "../styles/Prescription.css";
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

function Prescription() {
    const [period, setPeriod] = useState("AM");
    const [data, setData] = useState({
        doctorName: "",
        hospitalName: "",
        date: "",
        timeHours: "0",
        timeMinutes: "0",
        patientName: "",
        patientAge: "",
        reason: "",
        medication: "",
        notes: "",
        gender: "",
        mealTime: "",
        dosage: "",
        frequency: "",
        duration: "",
        medicineQuantity: "",
        medicineTiming: "",
        medicineDays: ""
    });

    useEffect(() => {
        fetch("https://api.example.com/prescription") // Replace with actual API endpoint
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const btns = [
        { id: "1", btnName: "After 3 days" },
        { id: "2", btnName: "After a week" },
        { id: "3", btnName: "After 2 weeks" },
        { id: "4", btnName: "After a Month" },
        { id: "5", btnName: "Customize" }
    ];

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
  const handleDoctorClinic = () =>{
    navigate("/doctorclinic");
  }
  const handleEncounter = () =>{
    navigate("/encounter");
  }
  const handleBedAllotment = () =>{
    navigate("/bedallotment");
  }
  const handlePayment = () =>{
    navigate("/payment");
  }
  const isMobile = window.innerWidth <= 768;
      

    return (
        <div className="prescription-container">
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
              <li onClick={handleEncounter}><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
              <li onClick={handleDoctorClinic}><img src={doctor} alt="doctor-icon" className="sidebar-logos"/> Doctor & Clinic</li>
              <li className="active"><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
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
              <li className="active"><img src={prescription} alt="prescription-icon" className="sidebar-logos"/> Prescription</li>
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
            <div className="prescription__container">
                <div className="pres__recommedation">
                    Prescription Recommendation
                    <div className="hamburger_menu">
                        <div className="hamburger">
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>
                    </div>
                    <img src={ellipse} alt="profile_pic" className="profile_pic" />
                </div>
                <div className="doctor__details">
                    <p className="details">Doctor Details</p>
                    <div className="box1">
                        <div className="box1_form">
                            <input type="text" name="doctorName" placeholder="Doctor's Name" className="doctor_name" value={data.doctorName} onChange={handleChange} />
                            <input type="text" name="hospitalName" placeholder="Hospital Name" className="hospital_name" value={data.hospitalName} onChange={handleChange} />
                            <input type="date" name="date" className="dates" value={data.date} onChange={handleChange} />
                            <span className="time-picker">
                                <span className="label">Time</span>
                                <div className="time-input">
                                    <input type="number" name="timeHours" max="12" min="0" className="time-box" value={data.timeHours} onChange={handleChange} /> :
                                    <input type="number" name="timeMinutes" max="60" min="0" className="time-box" value={data.timeMinutes} onChange={handleChange} />
                                    <span
                                        className={`am-pm ${period === "AM" ? "selected" : ""}`}
                                        onClick={() => setPeriod("AM")}
                                    >
                                        AM
                                    </span>
                                    <span
                                        className={`am-pm ${period === "PM" ? "selected" : ""}`}
                                        onClick={() => setPeriod("PM")}
                                    >
                                        PM
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                    <p className="patient_details">Patient Details</p>
                    <div className="box2">
                        <div className="box2_form">
                            <input type="text" name="patientName" placeholder="Patient's Name" className="patient_name" value={data.patientName} onChange={handleChange} />
                            <input type="number" name="patientAge" min="0" placeholder="Age" className="patient_age" value={data.patientAge} onChange={handleChange} />
                            <span className="gender-picker">
                                <span className="gen_label">Gender</span>
                                <span className="gen-input">
                                    <input type="radio" className="radio-box" name="gender" value="male" checked={data.gender === "male"} onChange={handleChange} /> Male
                                    <input type="radio" className="radio-box" name="gender" value="female" checked={data.gender === "female"} onChange={handleChange} /> Female
                                </span>
                            </span>
                            <textarea name="reason" className="reason" placeholder="Reason for patient’s visit" value={data.reason} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <p className="medical_details">Medication Details</p>
                    <div className="box3">
                        <div className="box3_form">
                            <input type="text" name="medication" placeholder="Medical Recommendation" className="Medical_name" value={data.medication} onChange={handleChange} />
                            <input type="number" name="medicineQuantity" min="0" placeholder="0" className="Medical_quantity" value={data.medicineQuantity} onChange={handleChange} />
                            <input type="number" name="medicineTiming" min="0" placeholder="0-0-0" className="Medical_timing" value={data.medicineTiming} onChange={handleChange} />
                            <input type="number" name="medicineDays" min="0" placeholder="0" className="Medical_days" value={data.medicineDays} onChange={handleChange} />
                            <span className="medical-picker">
                                <span className="medical_label">Time</span>
                                <span className="medical-input">
                                    <input type="radio" className="radio-box1" name="mealTime" value="After Meal" checked={data.mealTime === "After Meal"} onChange={handleChange} /> After Meal
                                    <input type="radio" className="radio-box1" name="mealTime" value="Before Meal" checked={data.mealTime === "Before Meal"} onChange={handleChange} /> Before Meal
                                </span>
                                <img src={add} alt="add medical details" className="add_icon" />
                            </span>
                            <textarea name="notes" className="reason1" placeholder="Notes" value={data.notes} onChange={handleChange}></textarea>
                            <img src={deletes} alt="delete medical details" className="delete_icon" />
                        </div>
                    </div>
                    <p className="follow_details">Follow up appointment</p>
                    <div className="buttons">
                        <button className="none-btn">None</button>
                        {btns.map(btn => (
                            <div className="button-1" key={btn.id}>
                                <button className="button"> {btn.btnName} </button>
                            </div>
                        ))}
                    </div>
                    <button className="save_btn">Save</button>
                </div>
            </div>
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
}

export default Prescription;
