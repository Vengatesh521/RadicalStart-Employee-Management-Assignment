import React from "react";
import "./Navbar.css";
import { FaCog, FaBell } from "react-icons/fa";
import profileImg from "../../assets/img/profile.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-icons">
        <FaCog className="icon" />
        <FaBell className="icon" />
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}

export default Navbar;
