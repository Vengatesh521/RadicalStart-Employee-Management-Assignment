import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import "./AddEmployee.css";

function AddEmployee({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });
  const [message, setMessage] = useState(""); // For feedback

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("employee_id", formData.employeeId);
    data.append("department", formData.department);
    data.append("designation", formData.designation);
    data.append("project", formData.project);
    data.append("type", formData.type);
    data.append("status", formData.status);
    if (document.getElementById("upload").files[0]) {
      data.append("profile_img", document.getElementById("upload").files[0]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Employee added successfully!");
      setFormData({
        name: "",
        employeeId: "",
        department: "",
        designation: "",
        project: "",
        type: "",
        status: "",
      });
      setSelectedImage(null);
      document.getElementById("upload").value = ""; // Reset file input
    } catch (error) {
      setMessage("Error adding employee: " + error.message);
    }
  };

  return (
    <div className="add-employee-container">
      <div className="header" onClick={onBack}>
        <IoIosArrowBack className="back-icon" />
        <h2>Add New Employee</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="personal-info">
          <IoPerson className="icon-person" />
          <h3>Personal Information</h3>
        </div>
        <div className="profile-upload">
          <div className="profile-square">
            {selectedImage ? (
              <div className="image-container">
                <img
                  src={selectedImage}
                  alt="Profile"
                  className="uploaded-image"
                />
                <label htmlFor="upload" className="edit-overlay">
                  <FiEdit className="edit-icon" />
                </label>
              </div>
            ) : (
              <label htmlFor="upload" className="camera-overlay">
                <HiOutlineCamera className="camera-icon" />
              </label>
            )}
            <input
              type="file"
              accept="image/*"
              className="upload"
              id="upload"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-field">
            <label>Employee ID*</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Enter Employee ID"
              required
            />
          </div>
          <div className="form-field">
            <label>Department*</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="hr">Human Resources</option>
            </select>
          </div>
          <div className="form-field">
            <label>Designation*</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            >
              <option value="">Select Designation</option>
              <option value="design_lead">Design Lead</option>
              <option value="senior_designer">Senior Designer</option>
              <option value="junior_designer">Junior Designer</option>
              <option value="ui_ux_specialist">UI/UX Specialist</option>
            </select>
          </div>
          <div className="form-field">
            <label>Project</label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Enter Project"
            />
          </div>
          <div className="form-field">
            <label>Type*</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="office">Office</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="form-field status-field">
            <label>Status*</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
              <option value="intern">Intern</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
        </div>
        {message && <p className="message">{message}</p>}
        <div className="buttons">
          <button type="button" className="cancel-btn" onClick={onBack}>
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
