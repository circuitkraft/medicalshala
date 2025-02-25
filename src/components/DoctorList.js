import './DoctorList.css';
import ellipse from '../Images/ellipse.jpg';
import Sidebar from './Sidebar';
import { useState } from "react";
import SearchBar from './SearchBar';
import clinics from '../data/clinics';
import left from '../Images/Left.png';
import { useNavigate } from "react-router-dom";
function DoctorList({ doctors }) {
    const [activeTab, setActiveTab] = useState("doctor");
    const navigate = useNavigate();
    const handleBack = () => {
        if (activeTab === "clinic") {
            setActiveTab("doctor");
        } else {
            navigate(-1);
        }
    };
    return (
        <div className="doctor">
            <Sidebar />
            <div className="doc__recommedation">
                <img src={left} alt='left arrow' className='back' onClick={handleBack} />
                <div className="heading">Doctors & Clinics</div>
                <div className="ham1">
                    <div className="hamburger_menu">
                        <div className="hamburger">
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>
                    </div>
                    <img src={ellipse} alt="profile_pic" className="profile_pic" />
                </div>
            </div>
            <div className="tabs-1">
                <button
                    className={activeTab === "doctor" ? "tab-1 active" : "tab-1"}
                    onClick={() => setActiveTab("doctor")}
                >
                    Doctor
                </button>
                <button
                    className={activeTab === "clinic" ? "tab-1 active" : "tab-1"}
                    onClick={() => setActiveTab("clinic")}
                >
                    Clinic
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "doctor" ?
                    <div className="lists">
                        <SearchBar />
                        {doctors.map((doctor, index) => (
                            <div className="doctor_list" key={index}>
                                <img src={doctor.images} alt="doctor_image" className="doctor_img" />
                                <div className="doctor_detail">
                                    <p className="doctor_names">{doctor.name}</p>
                                    <p className="doctor_dept">{doctor.dept}</p>
                                    <p className="doctor_experience">{doctor.experience}</p>
                                    <p className="doctor_timing">{doctor.timing}</p>
                                    <div className="rate">
                                        <p className="doctor_rating">{doctor.rating}</p>
                                        <img src={doctor.starimage} alt="star_image" className="star_img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    : <div className="list">
                        <SearchBar />
                        {clinics.map((clinic, index) => (
                            <div className="clinic_list" key={index}>
                                <img src={clinic.images} alt="clinic_image" className="clinic_img" />
                                <div className="clinic_detail">
                                    <p className="clinic_names">{clinic.name}</p>
                                    <p className="clinic_dept">{clinic.head}</p>
                                    <p className="clinic_experience">{clinic.sub_head}</p>
                                    <p className="clinic_timing">{clinic.timing}</p>
                                    <div className="rates">
                                        <p className="clinic_rating">{clinic.rating}</p>
                                        <img src={clinic.starimage} alt="star_image" className="star_img" />
                                        <p className='more'>{clinic.more}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

export default DoctorList;