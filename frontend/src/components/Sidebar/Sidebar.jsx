import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUsers, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ setActiveTab, activeTab }) {
  return (
    <div className="sidebar">
      <div className="brand">RS-TECH</div>
      <ul>
        <li
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          <RxDashboard className="icon" /> Dashboard
        </li>
        <li
          className={activeTab === "employees" ? "active" : ""}
          onClick={() => setActiveTab("employees")}
        >
          <FaUsers className="icon" /> Employees
        </li>
        <li
          className={activeTab === "calendar" ? "active" : ""}
          onClick={() => setActiveTab("calendar")}
        >
          <FaCalendarAlt className="icon" /> Calendar
        </li>
        <li
          className={activeTab === "messages" ? "active" : ""}
          onClick={() => setActiveTab("messages")}
        >
          <FaEnvelope className="icon" /> Messages
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
