import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import "./ViewEmployee.css"; // reuse styles

function ViewEmployee({ employee, onBack }) {
  if (!employee) return null;

  return (
    <div className="add-employee-container">
      <div className="header" onClick={onBack}>
        <IoIosArrowBack className="back-icon" />
        <h2>View Employee Details</h2>
      </div>

      <div className="personal-info">
        <IoPerson className="icon-person" />
        <h3>Personal Information</h3>
      </div>

      <div className="profile-upload">
        <div className="profile-square">
          {employee.profile_img ? (
            <img
              src={`http://localhost:5000/uploads/${employee.profile_img}`}
              alt={employee.name}
              className="uploaded-image"
            />
          ) : (
            <span>No Image</span>
          )}
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label>Name</label>
          <p>{employee.name}</p>
        </div>
        <div className="form-field">
          <label>Employee ID</label>
          <p>{employee.employee_id}</p>
        </div>
        <div className="form-field">
          <label>Department</label>
          <p>{employee.department}</p>
        </div>
        <div className="form-field">
          <label>Designation</label>
          <p>{employee.designation}</p>
        </div>
        <div className="form-field">
          <label>Project</label>
          <p>{employee.project}</p>
        </div>
        <div className="form-field">
          <label>Type</label>
          <p>{employee.type}</p>
        </div>
        <div className="form-field">
          <label>Status</label>
          <p>{employee.status}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
