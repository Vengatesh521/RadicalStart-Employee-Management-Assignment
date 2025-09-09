import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../models/employeeModel.js";

export const getAllEmployees = (req, res) => {
  getEmployees((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const createEmployee = (req, res) => {
  const { name, employee_id, department, designation, project, type, status } =
    req.body;
  const profile_img = req.file ? req.file.filename : null;

  addEmployee(
    [
      name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
      profile_img,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee added", id: result.insertId });
    }
  );
};

export const editEmployee = (req, res) => {
  const { id } = req.params; // <-- this is actually employee_id
  const { name, department, designation, project, type, status } = req.body;
  const profile_img = req.file ? req.file.filename : req.body.profile_img;

  updateEmployee(
    id,
    [name, department, designation, project, type, status, profile_img],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee updated" });
    }
  );
};

export const removeEmployee = (req, res) => {
  const { id } = req.params; // <-- employee_id
  deleteEmployee(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee deleted" });
  });
};
