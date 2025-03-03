import React,{useState,useEffect} from "react";
import "../styles/Encounter.css";
import { useNavigate } from "react-router-dom"; 
import logo from "../Images/medicalshala.png";
import cd from "../Images/cd.png";
import notes from "../Images/notes.png";
import conversation from "../Images/conversation.png";
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
import { BsChevronDown, BsPlus } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";



const Encounter = () =>{
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
    const handleBedAllotment = () =>{
      navigate("/bedallotment");
    }
    const handlePayment = () =>{
      navigate("/payment");
    }
    
    const isMobile = window.innerWidth <= 768;
    const [expanded, setExpanded] = useState({ cds: true });
  const [interventions, setInterventions] = useState([
    "Start physical therapy sessions to improve mobility and reduce chronic joint pain.",
    "Prescribe antibiotics to treat bacterial throat infections and provide symptom relief.",
    "Initiate a controlled diet and exercise plan for managing Type 2 Diabetes.",
    "Administer bronchodilators to alleviate acute asthma symptoms.",
  ]);
  const [tests, setTests] = useState([
    "Perform an MRI scan to assess soft tissue and ligament damage.",
    "Conduct a throat culture test to confirm the presence of streptococcal bacteria.",
    "Perform an HbA1c test to monitor long-term blood sugar levels.",
    "Conduct a pulmonary function test (spirometry) to evaluate lung capacity and airflow.",
  ]);
  const [questions, setQuestions] = useState([
  ]);
  const [chiefComplaints, setChiefComplaints] = useState([
    "Fever and body aches lasting for more than three days, accompanied by fatigue and chills.",
    "Severe abdominal pain localized to the lower right side, with nausea and loss of appetite.",
    "Persistent cough and shortness of breath, especially during physical activities or at night.",
    "Headache and dizziness, often triggered by standing up, with occasional blurred vision."
  ]);
  const [newComplaint, setNewComplaint] = useState("");

  const [newIntervention, setNewIntervention] = useState("");
  const [newTest, setNewTest] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddItem = (type) => {
    if (type === "intervention" && newIntervention.trim() !== "") {
      setInterventions([...interventions, newIntervention]);
      setNewIntervention("");
    } else if (type === "test" && newTest.trim() !== "") {
      setTests([...tests, newTest]);
      setNewTest("");
    } else if (type === "question" && newQuestion.trim() !== "") {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  const handleAddComplaint = () => {
    if (newComplaint.trim() !== "") {
      setChiefComplaints([...chiefComplaints, newComplaint]);
      setNewComplaint(""); // Clear input after adding
      alert("Chief Complaint added successfully!"); // Success message
    }
  };
    return(
        <div className="encounter-container">
            
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
              <li><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
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
              <li onClick={handleAppointment} ><img src={appointment} alt="appointment-icon" className="sidebar-logos"/> Appointment</li>
              <li className="active"><img src={encounter} alt="encounter-icon" className="sidebar-logos"/> Encounter</li>
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
  

  <div className="encounter__container">
        <div className="header">
          <h2>Encounter <FiMenu className="menu"/> &nbsp;&nbsp;
          <img src={profilePic} alt="Profile" className="profile-pic" /></h2>
          </div>
          <div className="header-right">
            <div className="audio-bar">
              <button className="resume-btn">▶ Resume</button>
              <button className="stop-btn">⏹ Stop</button>
              <div className="waveform"></div>
              <span className="time">9:46</span>
            </div>
          </div>
          <br/>
        <div className="section">
        {showPopup && <div className="popup">Added successfully!</div>}
        <div className="section-header" onClick={() => toggleSection("cds")}>
          <span>
            <img src={cd} alt="cd-icon" className="cd-icon" /> CDs
          </span>
          <BsChevronDown className={`arrow ${expanded.cds ? "open" : ""}`} />
        </div>
        {expanded.cds && (
          <div className="cd-content">
            <div className="card">
              <div className="card-header">
                <h3>Suggested Interventions</h3>
                <button className="add-btn" onClick={() => handleAddItem("intervention")}>
                  <BsPlus /> Add
                </button>
              </div>
              <ul>
                {interventions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add new intervention"
                value={newIntervention}
                onChange={(e) => setNewIntervention(e.target.value)}
                className="input-box"
              />
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Suggested Tests</h3>
                <button className="add-btn" onClick={() => handleAddItem("test")}>
                  <BsPlus /> Add
                </button>
              </div>
              <ul>
                {tests.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add new test"
                value={newTest}
                onChange={(e) => setNewTest(e.target.value)}
                className="input-box"
              />
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Suggested Questions</h3>
                <button className="add-btn" onClick={() => handleAddItem("question")}>
                  <BsPlus /> Add
                </button>
              </div>
              <ul>
                {questions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add new question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="input-box"
              />
            </div>
          </div>
        )}
        </div>

        {/* Notes Section */}
        <div className="section">
      <div className="section-header" onClick={() => toggleSection("notes")}>
      <span>
            <img src={notes} alt="notes-icon" className="notes-icon" /> Notes
          </span>
        <BsChevronDown className={`arrow ${expanded.notes ? "open" : ""}`} />
      </div>

      {expanded.notes && (
        <div className="notes-content">
          <button className="generate-btn">Generate Notes</button>

          <div className="card">
            <div className="card-header">
              <h3>Chief Complaints</h3>
              <button className="add-btn" onClick={handleAddComplaint}>
                <BsPlus /> Add
              </button>
            </div>
            <ol>
              {chiefComplaints.map((complaint, index) => (
                <li key={index}>{complaint}</li>
              ))}
            </ol>

            {/* Input field to add new complaints */}
            <div className="add-section">
              <input
                type="text"
                placeholder="Enter a new chief complaint..."
                value={newComplaint}
                onChange={(e) => setNewComplaint(e.target.value)}
              />
              
            </div>
          </div>
          </div>
      )}
      </div>

        {/* Conversation Section */}
        <div className="section">
  <div className="section-header" onClick={() => toggleSection("conversation")}>
    <span>
      <img src={conversation} alt="conversation-icon" className="conversation-icon" /> Conversation
    </span>
    <BsChevronDown className={`arrow ${expanded.conversation ? "open" : ""}`} />
  </div>

  {expanded.conversation && (
    <div className="conversation-content">
      <div className="conversation-box">
        <p><strong>PT</strong> Doctor, I’ve been having severe stomach pain for the past two days. It feels like it’s getting worse, especially after eating.</p>
        <p className="dr"><strong>DR</strong><span className="doctor-response">I understand, Meera. Of course, I’ll examine your abdomen and ask a few more questions to narrow down the cause. Have you noticed any other symptoms, like nausea, vomiting, or changes in your bowel habits?</span></p>
        <p><strong>PT</strong> Yes, I’ve felt nauseous, but I haven’t vomited. My stools have been irregular, and I feel bloated most of the time.</p>
        <p className="dr"><strong>DR</strong> <span className="doctor-response">That’s helpful to know. It sounds like this could be related to indigestion, an infection, or even a gastric ulcer. Have you eaten anything unusual recently or taken any medications that upset your stomach?</span></p>
        <p><strong>PT</strong> I ate some street food three days ago, but I didn’t feel anything until the day after. I also took some painkillers last week for a headache.</p>
        <p className="dr"><strong>DR</strong> <span className="doctor-response">Street food and painkillers could both be contributing factors. I’ll suggest running some tests, including an abdominal ultrasound and a stool test, to check for infections or inflammation.</span></p>
        <p><strong>PT</strong> Okay, Doctor. Do I need to follow any specific diet or medication in the meantime?</p>
        <p className="dr"><strong>DR</strong> <span className="doctor-response">Yes, avoid spicy or oily food for now, and stay hydrated. I’ll also prescribe a mild antacid to ease your stomach pain until we get the test results.</span></p>
      </div>
    </div>
  )}
</div>

      </div>
        </div>
    );
};



export default Encounter;