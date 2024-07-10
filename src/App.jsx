import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainpage } from "./layouts/Mainpage";

function App() {
  return (
    <Router>
      <div className="max-w-screen flex ">
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
