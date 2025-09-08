import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Employee from "../../components/Employee/Employee"; // import Employee component
import "./Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("dashboard"); // default

  return (
    <div className="home">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />

      <div className="container">
        <Navbar />
        <div className="home-content">
          {activeTab === "dashboard" && (
            <h2>Dashboard – Will be implemented soon</h2>
          )}

          {activeTab === "employees" && <Employee />}

          {activeTab === "calendar" && (
            <h2>Calendar – Will be implemented soon</h2>
          )}

          {activeTab === "messages" && (
            <h2>Messages – Will be implemented soon</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
