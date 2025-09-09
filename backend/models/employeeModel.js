import db from "../config/db.js";

export const getEmployees = (callback) => {
  db.query("SELECT * FROM employees", callback);
};

export const addEmployee = (data, callback) => {
  const sql =
    "INSERT INTO employees (name, employee_id, department, designation, project, type, status, profile_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, data, callback);
};

// ✅ Use employee_id instead of id
export const updateEmployee = (employeeId, data, callback) => {
  const sql =
    "UPDATE employees SET name=?, department=?, designation=?, project=?, type=?, status=?, profile_img=? WHERE employee_id=?";
  db.query(sql, [...data, employeeId], callback);
};

export const deleteEmployee = (employeeId, callback) => {
  db.query("DELETE FROM employees WHERE employee_id=?", [employeeId], callback);
};
