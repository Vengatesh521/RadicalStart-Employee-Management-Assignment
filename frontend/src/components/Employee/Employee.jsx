import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import AddEmployee from "../AddEmployee/AddEmployee";
import ViewEmployee from "../ViewEmployee/ViewEmployee";
import EditEmployee from "../EditEmployee/EditEmployee";
import Navbar from "../../components/Navbar/Navbar";
import DeleteModal from "../DeleteModal/DeleteModal"; // ✅ Import modal
import "./Employee.css";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("list"); // list | add | view | edit
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // ✅ modal state
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  };

  const handleDelete = () => {
    if (!employeeToDelete) return;

    axios
      .delete(
        `http://localhost:5000/api/employees/${employeeToDelete.employee_id}`
      )
      .then(() => {
        fetchEmployees();
        setShowDeleteModal(false);
        setEmployeeToDelete(null);
      })
      .catch((err) => console.error("Error deleting:", err));
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {mode === "add" && <AddEmployee onBack={() => setMode("list")} />}
      {mode === "view" && (
        <ViewEmployee
          employee={selectedEmployee}
          onBack={() => setMode("list")}
        />
      )}
      {mode === "edit" && (
        <EditEmployee
          employee={selectedEmployee}
          onBack={() => {
            setMode("list");
            fetchEmployees(); // refresh after update
          }}
        />
      )}
      {mode === "list" && (
        <>
          <Navbar />

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
              <button
                className="btn btn-primary"
                onClick={() => setMode("add")}
              >
                <IoMdAddCircleOutline />
                Add New Employee
              </button>
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
                      <FaEye
                        className="view"
                        onClick={() => {
                          setSelectedEmployee(emp);
                          setMode("view");
                        }}
                      />
                      <FaRegEdit
                        className="edit"
                        onClick={() => {
                          setSelectedEmployee(emp);
                          setMode("edit");
                        }}
                      />
                      <FaRegTrashAlt
                        className="delete"
                        onClick={() => {
                          setEmployeeToDelete(emp);
                          setShowDeleteModal(true);
                        }}
                      />
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

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Employee;
