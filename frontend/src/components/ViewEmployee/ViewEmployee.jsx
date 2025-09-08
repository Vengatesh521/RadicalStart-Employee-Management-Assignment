import React from "react";
import { useParams } from "react-router-dom";
import "./ViewEmployee.css";

function ViewEmployee() {
  const { id } = useParams();

  // Later fetch employee by id from backend
  return (
    <div className="view-employee">
      <h2>View Employee #{id}</h2>
      <p>Employee details will be displayed here.</p>
    </div>
  );
}

export default ViewEmployee;
