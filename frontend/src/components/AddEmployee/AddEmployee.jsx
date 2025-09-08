import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import "./AddEmployee.css";

function AddEmployee({ onBack }) {
  return (
    <div className="add-employee-container">
      <div className="header" onClick={onBack}>
        <IoIosArrowBack className="back-icon" />
        <h2>Add New Employee</h2>
      </div>
      <form>
        <div className="personal-info">
          <IoPerson className="icon-person" />
          <h3>Personal Information</h3>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="form-field">
            <label>Employee ID*</label>
            <input type="text" placeholder="Enter Employee ID" />
          </div>
          <div className="form-field">
            <label>Department*</label>
            <select>
              <option>Select Department</option>
            </select>
          </div>
          <div className="form-field">
            <label>Designation*</label>
            <select>
              <option>Select Designation</option>
            </select>
          </div>
          <div className="form-field">
            <label>Project</label>
            <input type="text" placeholder="Enter Project" />
          </div>
          <div className="form-field">
            <label>Type*</label>
            <select>
              <option>Select Type</option>
            </select>
          </div>
          <div className="form-field status-field">
            <label>Status*</label>
            <select>
              <option>Select Status</option>
            </select>
          </div>
        </div>
        <div className="form-field profile-img-field">
          <label>Profile Image</label>
          <input type="file" accept="image/*" />
        </div>
        <div className="buttons">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="confirm-btn">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
