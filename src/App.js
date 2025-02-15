import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prescription from "./components/Prescription";
import DoctorList from "./components/DoctorList";
import DoctorDetails from "./data/doctors";
import ClinicDetails from "./data/clinics"; // Import clinics

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/doctor-and-clinic" element={<DoctorList doctors={DoctorDetails} clinics={ClinicDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
