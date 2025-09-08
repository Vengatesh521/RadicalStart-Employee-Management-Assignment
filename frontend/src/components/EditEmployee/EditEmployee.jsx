import React from "react";
import { useParams } from "react-router-dom";
import "./EditEmployee.css";

function EditEmployee() {
  const { id } = useParams();

  return (
    <div className="edit-employee">
      <h2>Edit Employee #{id}</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Department" />
        <input type="text" placeholder="Designation" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditEmployee;
