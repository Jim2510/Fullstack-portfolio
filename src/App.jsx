import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainpage } from "./layouts/Mainpage";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
        <Routes>
            <Analytics>
          <Route path="/" element={<Mainpage />} />
            </Analytics>
        </Routes>
    </Router>
  );
}

export default App;
