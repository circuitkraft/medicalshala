import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prescription from "./components/Prescription";
import DoctorList from "./components/DoctorList";
import Encounter from "./components/Encounter";
import DoctorDetails from "./data/doctors";
import ClinicDetails from "./data/clinics";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Encounter" element={<Encounter />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/doctor-and-clinic" element={<DoctorList doctors={DoctorDetails} clinics={ClinicDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
