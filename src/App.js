import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import AskAi from "./components/AskAi";
import Inbox from "./components/Inbox";
import Appointment from "./components/Appointment";
import Dashboard from "./components/Dashboard";
import DoctorSignup from "./components/DoctorSignup";
import Prescription from "./components/Prescription";
import Encounter from "./components/Encounter";
import DoctorClinic from "./components/DoctorClinic";
import ScheduleAppointment from "./components/ScheduleAppointment";
import PaymentProcess from "./components/PaymentProcess";
import BedAllotment from "./components/BedAllotment";
import Payment from "./components/Payment";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        {isMobile ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/askai" element={<AskAi />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signup" element={<DoctorSignup/>}/>
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/encounter" element={<Encounter/>}/>
        <Route path="/doctorclinic" element={<DoctorClinic/>}/>
        <Route path="/scheduleappointment" element={<ScheduleAppointment/>}/>
        <Route path="/paymentprocess" element={<PaymentProcess/>}/>
        <Route path="/bedallotment" element={<BedAllotment/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </Router>
  );
};


export default App;
