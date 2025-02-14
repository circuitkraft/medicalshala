import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import AskAi from "./components/AskAi";
import Inbox from "./components/Inbox";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/askai" element={<AskAi/>}/>
          <Route path="/inbox" element={<Inbox/>}/>
        </Routes>
    </Router>
  );
}

export default App;
