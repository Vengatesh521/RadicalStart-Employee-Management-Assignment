import React from "react";
import "./DeleteModal.css";
import { RiDeleteBinLine } from "react-icons/ri";
function DeleteModal({ onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-icon">
          <RiDeleteBinLine />
        </div>
        <p>Are you sure you want to Delete?</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-yes" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
