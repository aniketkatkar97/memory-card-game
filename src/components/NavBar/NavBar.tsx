import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

let activeStyling = ({ isActive }: {isActive: boolean}): React.CSSProperties => {
  if (isActive) {
    return {
      backgroundColor: "rgb(122, 200, 85)",
    };
  } else {
    return {
      backgroundColor: "rgb(112, 170, 36)"
    }
  }
}

function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <NavLink
            className="nav-link-items"
            style={activeStyling}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link-items"
            style={activeStyling}
            to="/game"
          >
            Start Game
          </NavLink>
          <h1>The Memory Card Game</h1>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
