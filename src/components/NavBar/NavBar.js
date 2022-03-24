import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
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
            to="/home"
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
