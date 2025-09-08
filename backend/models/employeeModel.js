import db from "../config/db.js";

export const getEmployees = (callback) => {
  db.query("SELECT * FROM employees", callback);
};

export const addEmployee = (data, callback) => {
  const sql =
    "INSERT INTO employees (name, employee_id, department, designation, project, type, status, profile_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, data, callback);
};

export const updateEmployee = (id, data, callback) => {
  const sql =
    "UPDATE employees SET name=?, department=?, designation=?, project=?, type=?, status=?, profile_img=? WHERE id=?";
  db.query(sql, [...data, id], callback);
};

export const deleteEmployee = (id, callback) => {
  db.query("DELETE FROM employees WHERE id=?", [id], callback);
};
