import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import AskAi from "./components/AskAi";
import Inbox from "./components/Inbox";
import Appointment from "./components/Appointment";
import Dashboard from "./components/Dashboard";
import DoctorSignup from "./components/DoctorSignup";

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
      </Routes>
    </Router>
  );
};

export default App;
