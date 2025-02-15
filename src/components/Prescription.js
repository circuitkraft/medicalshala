import Sidebar from "./Sidebar";
import ellipse from "../Images/ellipse.jpg";
import add from "../Images/more 7.png";
import deletes from "../Images/trash 7.png";
import { useState } from "react";
import "./Prescription.css";
function Prescription() {
    const [period, setPeriod] = useState("AM");
    const btns = [
        { id: "1", btnName: "After 3 days" },
        { id: "2", btnName: "After a week" },
        { id: "3", btnName: "After 2 weeks" },
        { id: "4", btnName: "After a Month" },
        { id: "5", btnName: "Customize" }
    ]
    return (
        <div className="prescription">
            <Sidebar />
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
                            <input type="text"
                                placeholder="Doctor's Name"
                                className="doctor_name"
                            />
                            <input type="text"
                                placeholder="Hospital Name"
                                className="hospital_name"
                            />
                            <input type="date"
                                className="dates"
                            />
                            <span className="time-picker">
                                <span className="label">Time</span>
                                <div className="time-input">
                                    <input type="number" max="12" min="0" className="time-box" defaultValue="0" /> :
                                    <input type="number" max="60" min="0" className="time-box" defaultValue="0" />
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
                            <input type="text"
                                placeholder="Patient's Name"
                                className="patient_name"
                            />
                            <input type="number"
                                min="0"
                                placeholder="Age"
                                className="patient_age"
                            />
                            <span className="gender-picker">
                                <span className="gen_label">Gender</span>
                                <span className="gen-input">
                                    <input type="radio" className="radio-box" name="gender" value="male" /> Male
                                    <input type="radio" className="radio-box" name="gender" value="female" /> Female
                                </span>
                            </span>
                            <textarea className="reason" placeholder="Reason for patient’s visit"></textarea>

                        </div>
                    </div>
                    <p className="medical_details">Medication Details</p>
                    <div className="box3">
                        <div className="box3_form">
                            <input type="text"
                                placeholder="Medical Recommendation"
                                className="Medical_name"
                            />
                            <input type="number"
                                min="0"
                                placeholder="0"
                                className="Medical_age"
                                defaultValue="0"
                            />
                            <input type="number"
                                min="0"
                                placeholder="0-0-0"
                                className="Medical"
                                defaultValue="0"
                            />
                            <input type="number"
                                min="0"
                                placeholder="0"
                                className="Medicals"
                                defaultValue="0"
                            />
                            <span className="medical-picker">
                                <span className="medical_label">Time</span>
                                <span className="medical-input">
                                    <input type="radio" className="radio-box1" name="meal" value="After Meal" />After Meal
                                    <input type="radio" className="radio-box1" name="meal" value="Before Meal" />Before Meal
                                </span>
                                <img src={add} alt="add medical details" className="add_icon" />
                            </span>
                            <textarea className="reason1" placeholder="Notes"></textarea>
                            <img src={deletes} alt="delete medical details" className="delete_icon" />
                        </div>
                    </div>
                    <p className="follow_details">Follow up appointment</p>
                    <div className="buttons">
                        <button className="none-btn">None</button>
                        {
                            btns.map(btn => (
                                <div className="button-1" key={btn.id}>
                                    <button className="button"> {btn.btnName} </button>
                                </div>
                            ))
                        }
                    </div>
                    <button className="save_btn">Save</button>
                </div>
            </div>
        </div>
    )
}
export default Prescription;