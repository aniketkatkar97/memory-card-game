import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/home/Home";
import GameWindow from "./components/game-window/GameWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<GameWindow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
