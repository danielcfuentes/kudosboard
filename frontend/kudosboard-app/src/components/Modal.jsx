import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";

const Modal = ({ onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // HTML -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h1>Create a New Board</h1>

        <div className="modal-details">
          <h4>Title:</h4>
          <input type="text" placeholder="" />

          <h4>Category:</h4>
          <select>
            <option value="">Select a Category</option>
            <option value="">Recent</option>
            <option value="">Celebration</option>
            <option value="">Thank you</option>
            <option value="">Inspiration</option>
          </select>

          <h4>Arthur:</h4>
          <input type="text" placeholder="" />

          <button className="create-button">Create Board</button>
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
