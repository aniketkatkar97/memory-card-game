import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GameWindow from "./components/GameWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Game" element={<GameWindow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
