import Sidebar from "./Sidebar";
import ellipse from "../Images/ellipse.jpg";
import add from "../Images/more 7.png";
import deletes from "../Images/trash 7.png";
import { useState, useEffect } from "react";
import "./Prescription.css";

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
        </div>
    );
}

export default Prescription;
