import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ellipse from '../Images/ellipse.jpg';
import Sidebar from './Sidebar';
import left from '../Images/Left.png';
import { IoPersonOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { BsHeartPulse } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBookMedical, FaStickyNote, FaBarcode, FaComments, FaPenFancy } from "react-icons/fa";
import './Encounter.css';
function Encounter() {
    const [activeTab, setActiveTab] = useState("cds");
    const navigate = useNavigate();

    const handleBack = () => {
        if (activeTab === "clinic") {
            setActiveTab("cds");
        } else {
            navigate(-1);
        }
    };

    const [cdsText, setCdsText] = useState(localStorage.getItem('cdsText') || '');
    const [testText, setTestText] = useState(localStorage.getItem('testText') || '');
    const [qnText, setQnText] = useState(localStorage.getItem('qnText') || '');
    const [chiefText, setChiefText] = useState(localStorage.getItem('chiefText') || '');
    const [historyText, setHistoryText] = useState(localStorage.getItem('historyText') || '');

    useEffect(() => {
        localStorage.setItem('cdsText', cdsText);
        localStorage.setItem('testText', testText);
        localStorage.setItem('qnText', qnText);
        localStorage.setItem('chiefText', chiefText);
        localStorage.setItem('historyText', historyText);
    }, [cdsText, testText, qnText, chiefText, historyText]);


    const tabIcons = {
        cds: <FaBookMedical />,
        notes: <FaStickyNote />,
        codes: <FaBarcode />,
        convo: <FaComments />,
        jot: <FaPenFancy />,
    };
    function handleClick(boxType, action) {
        if (action === "clear") {
            if (boxType === "cds") {
                setCdsText("");
                localStorage.removeItem("cdsText");
            } else if (boxType === "test") {
                setTestText("");
                localStorage.removeItem("testText");
            } else if (boxType === "qn") {
                setQnText("");
                localStorage.removeItem("qnText");
            } else if (boxType === "Chief Complaints") {
                setChiefText("");
                localStorage.removeItem("chiefText");
            } else if (boxType === "History of Present Illness") {
                setHistoryText("");
                localStorage.removeItem("historyText");
            }
        } else {
            const userInput = prompt("Enter your text:");
            if (userInput) {
                if (boxType === "cds") {
                    setCdsText((prev) => (prev ? `${prev}\n${userInput}` : userInput));
                } else if (boxType === "test") {
                    setTestText((prev) => (prev ? `${prev}\n${userInput}` : userInput));
                } else if (boxType === "qn") {
                    setQnText((prev) => (prev ? `${prev}\n${userInput}` : userInput));
                } else if (boxType === "Chief Complaints") {
                    setChiefText((prev) => (prev ? `${prev}\n${userInput}` : userInput));
                } else if (boxType === "History of Present Illness") {
                    setHistoryText((prev) => (prev ? `${prev}\n${userInput}` : userInput));
                }
            }
        }
    }

    const chat = [
        { role: "PT", text: "Doctor, I’ve been having severe stomach pain for the past two days. It feels like it’s getting worse, especially after eating." },
        { role: "DR", text: "I understand, Meera. Of course, I’ll examine your abdomen and ask a few more questions to narrow down the cause. Have you noticed any other symptoms, like nausea, vomiting, or changes in your bowel habits?" },
        { role: "PT", text: "Yes, I’ve felt nauseous, but I haven’t vomited. My stools have been irregular, and I feel bloated most of the time." },
        { role: "DR", text: "That’s helpful to know. It sounds like this could be related to indigestion, an infection, or even a gastric ulcer. Have you eaten anything unusual recently or taken any medications that upset your stomach?" },
        { role: "PT", text: "I ate some street food three days ago, but I didn’t feel anything until the day after. I also took some painkillers last week for a headache." },
        { role: "DR", text: "Street food and painkillers could both be contributing factors. I’ll suggest running some tests, including an abdominal ultrasound and a stool test, to check for infections or inflammation." },
        { role: "PT", text: "Okay, Doctor. Do I need to follow any specific diet or medication in the meantime?" },
    ];

    return (
        <div className="encounter">
            <Sidebar />
            <div className="encount_recommedation">
                <img src={left} alt='left arrow' className='back' onClick={handleBack} />
                <div className="encount_heading">Encounter</div>
                <div className="ham">
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

            <div className="encount-sugest">
                <div className="item1">
                    <div className="encount_tabs">
                        {["cds", "notes", "codes", "convo", "jotting"].map((tab) => (
                            <button
                                key={tab}
                                className={activeTab === tab ? "tab active" : "tab"}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tabIcons[tab]} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="encount-content">
                        {activeTab === "cds" && (
                            <div className="encount-cds">
                                {[
                                    { label: "Suggested Interventions", key: "cds" },
                                    { label: "Suggested Test", key: "test" },
                                    { label: "Suggested Questions", key: "qn" },
                                ].map((box) => (
                                    <div key={box.label} className={`cds-box ${box.key}`}>
                                        <div className='box-header'>
                                            <div className="box-heading">{box.label.toUpperCase()} </div>
                                            <button className='box-add' onClick={() => handleClick(box.key)}>+ Add</button>
                                        </div>
                                        <div className='box-content'>
                                            <ol>
                                                {(box.key === "cds" ? cdsText : box.key === "test" ? testText : qnText)
                                                    .split("\n")
                                                    .filter((text) => text.trim() !== "")
                                                    .map((text, index) => (
                                                        <li key={index}>{text}</li>
                                                    ))}
                                            </ol>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === "notes" && (
                            <div className="encount-cds">
                                {["Chief Complaints", "History of Present Illness"].map((box) => (
                                    <div key={box} className={`cds-box ${box}`}>
                                        <div className='box-header'>
                                            <div className="box-heading">{box.toUpperCase()} </div>
                                            <button className='box-add' onClick={() => handleClick(box)}>+ Add</button>
                                        </div>
                                        <div className='box-content'>
                                            <ol>
                                                {(box === "Chief Complaints" ? chiefText : historyText)
                                                    .split("\n")
                                                    .filter((text) => text.trim() !== "")
                                                    .map((text, index) => (
                                                        <li key={index}>{text}</li>
                                                    ))}
                                            </ol>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="p-4 bg-gray-100 min-h-screen">
                            {activeTab === "convo" && (
                                <div className="chat-box">
                                    {chat.map((msg, index) => (
                                        <p key={index} className={msg.role === "DR" ? "message encount-doctor" : "message patient"}>
                                            <strong>{msg.role}: </strong> {msg.text}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="patient-container">
                    <div className="patient-header">
                        <div className="patient-name">
                            <h2>Aarav</h2>
                        </div>
                        <FiMail className="email-icon" />
                    </div>
                    <div className="patient-info">
                        <span>PT23212</span>
                        <span><IoPersonOutline /> 30, Male</span>
                        <span><HiOutlineClock /> Visited 1 month ago</span>
                    </div>
                    <div className="tabs">
                        <button className="tab active"><BsHeartPulse /> Patient Portrait</button>
                        <button className="tab">RAF</button>
                        <button className="tab">
                            <MdHistory />
                            History
                        </button>
                    </div>
                    <div className="diagnostic-header">
                        <h3>Diagnostic Overview</h3>
                        <IoMdArrowDropdown className="dropdown-icon" />
                    </div>
                    <div className="diagnostic-box">
                        <div className="diagnostic-title">
                            <span>DIABETES MELLITUS</span>
                            <span className="condition">Type 2 diabetes mellitus</span>
                        </div>
                        <div className="labs">
                            <p className="lab-item red">eGFR =55 <span>05/2024</span> <span className="history">History</span></p>
                            <p className="lab-item green">HbA1c=6.2 <span>05/2024</span> <span className="history">History</span></p>
                            <p className="lab-item orange">sugar=123 <span>05/2024</span> <span className="history">History</span></p>
                            <p className="lab-item orange">sugar=165 <span>05/2024</span> <span className="history">History</span></p>
                        </div>

                        <div className="consults">
                            <p className='consult'>Consult notes <span style={{ marginLeft: "70px" }}>05/2024</span> <button className="report-btn">Report</button></p>
                        </div>
                    </div>
                    <div className="diagnostic-box">
                        <div className="diagnostic-title">
                            <span>HYPERTENSION</span>
                            <span className="condition">Extension Hypertension</span>
                        </div>
                        <div className="labs">
                            <p className="no-labs">LABS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Encounter;
