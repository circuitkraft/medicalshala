import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/1000068891-removebg-preview 1.png';
import appoint from '../Images/Book appointment.png';
import encounter from '../Images/Encounter.png';
import mail from '../Images/Mail Box.png';
import ai from '../Images/AI Assist.png';
import mail1 from '../Images/Mail Box (1).png';
import mail2 from '../Images/Mail Box (2).png';
import mail3 from '../Images/Mail Box (4).png';
import mail4 from '../Images/History.png';
import mail5 from '../Images/History (1).png';
import mail6 from '../Images/Mail Box (5).png';

function Sidebar() {
    const location = useLocation(); // Get current path for active styling

    return (
        <div className="sidebar">
            <img src={logo} alt="" className="sidebar__logo" />
            <div className="sidebar__item">
                <button className='sidebar__schedule__btn'>Schedule Appointment</button>

                <div className={`Appointment ${location.pathname === "/appointment" ? "active" : ""}`}>
                    <img src={appoint} alt='appointment_logo' className='appointment_img' />
                    <span className='appointment_text'>Appointment</span>
                </div>
                <div className={`Appointment ${location.pathname === "/encounter" ? "active" : ""}`}>
                    <img src={encounter} alt='appointment_logo' />
                    <span className='appointment_text'>Encounter</span>
                </div>
                <div className={`Appointment ${location.pathname === "/inbox" ? "active" : ""}`}>
                    <img src={mail} alt='appointment_logo' />
                    <span className='appointment_text'>Inbox</span>
                </div>
                <div className={`Appointment ${location.pathname === "/ask-ai" ? "active" : ""}`}>
                    <img src={ai} alt='appointment_logo' />
                    <span className='appointment_text'>Ask AI</span>
                </div>
                <Link to="/prescription" className={location.pathname === "/prescription" ? "active" : ""}>
                    <div className="Appointment">
                        <img src={mail2} alt='appointment_logo' />
                        <span className='appointment_text'>Prescription</span>
                    </div>
                </Link>
                <Link to="/doctor-and-clinic" className={location.pathname === "/doctor-and-clinic" ? "active" : ""}>
                    <div className="Appointment">
                        <img src={mail1} alt='appointment_logo' />
                        <span className='appointment_text'>Doctor & Clinic</span>
                    </div>
                </Link>
                <div className={`Appointment ${location.pathname === "/bed-allotment" ? "active" : ""}`}>
                    <img src={mail3} alt='appointment_logo' />
                    <span className='appointment_text'>Bed Allotment</span>
                </div>
                <div className={`Appointment ${location.pathname === "/payment" ? "active" : ""}`}>
                    <img src={mail4} alt='appointment_logo' />
                    <span className='appointment_text'>Payment</span>
                </div>
                <div className={`Appointment ${location.pathname === "/history" ? "active" : ""}`}>
                    <img src={mail5} alt='appointment_logo' />
                    <span className='appointment_text'>History</span>
                </div>
                <div className={`Appointment ${location.pathname === "/campaign" ? "active" : ""}`}>
                    <img src={mail6} alt='appointment_logo' />
                    <span className='appointment_text'>Campaign</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
