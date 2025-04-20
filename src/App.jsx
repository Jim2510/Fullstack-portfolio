import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LayoutMainpage } from "./layouts/LayoutMainpage.jsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LayoutMainpage />} />
        </Routes>
    </Router>
  );
}

export default App;
