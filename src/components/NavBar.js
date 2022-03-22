import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <NavLink
            className="nav-link-items"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  backgroundColor: "rgb(122, 200, 85)",
                };
              }
            }}
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link-items"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  backgroundColor: "rgb(122, 200, 85)",
                };
              }
            }}
            to="/Game"
          >
            Start Game
          </NavLink>
          <h1>The Memory Card Game</h1>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
