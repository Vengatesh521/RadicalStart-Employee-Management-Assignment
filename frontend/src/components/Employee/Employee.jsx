import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./Employee.css";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle between list and form

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {showAddForm ? (
        <AddEmployee onBack={() => setShowAddForm(false)} /> // Pass back callback
      ) : (
        <>
          <div className="top-container">
            <h2>Employee</h2>
            <div className="btn-container">
              <div className="search-box">
                <CiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {!showAddForm && ( // Show "Add New Employee" button only when not in add mode
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAddForm(true)}
                >
                  <IoMdAddCircleOutline />
                  Add New Employee
                </button>
              )}
            </div>
          </div>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Project</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.employee_id}>
                    <td className="emp-name">
                      <img
                        src={`http://localhost:5000/uploads/${emp.profile_img}`}
                        alt={emp.name}
                        className="profile-img"
                      />
                      {emp.name}
                    </td>
                    <td>{emp.employee_id}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.project}</td>
                    <td>{emp.type}</td>
                    <td>{emp.status}</td>
                    <td>
                      <FaEye className="view" />
                      <FaRegEdit className="edit" />
                      <FaRegTrashAlt className="delete" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-records">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Employee;
