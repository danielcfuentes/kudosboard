import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";

const Modal = ({ onClose, refreshBoards, setIsCreated, setBoards }) => {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardArthur, setBoardArthur] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCreateNewBoard = () => {
    setIsCreated(true);
    fetch("http://localhost:3000/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: boardTitle,
        category: boardCategory,
        author: boardArthur,
      }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching posts:", error));


    onClose();
  };

  const handleBoardTitle = (e) => {
    setBoardTitle(e.target.value);
  };

  const handleBoardArthur = (e) => {
    setBoardArthur(e.target.value);
  };

  const handleCategory = (e) => {
    setBoardCategory(e.target.value);
  };

  // RETURN -------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h1 id="modalTitle">Create a New Board</h1>

        <div className="modal-details">
          <label className="modalheaders">Title:</label>
          <input
            type="text"
            placeholder=""
            value={boardTitle}
            onChange={handleBoardTitle}
            className="modal-input"
          />

          <label className="modalheaders">Category:</label>
          <select onChange={(e) => handleCategory(e)} className="modal-category">
            <option value="SelectCategory">Select a Category</option>
            <option value="Celebration">Celebration</option>
            <option value="Thank You">Thank you</option>
            <option value="Inspiration">Inspiration</option>
          </select>

          <label className="modalheaders">(Optional) Author:</label>
          <input
            type="text"
            placeholder=""
            value={boardArthur}
            onChange={handleBoardArthur}
            className="modal-input"
          />

          <button className="create-button" onClick={handleCreateNewBoard}>
            Create Board
          </button>
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
