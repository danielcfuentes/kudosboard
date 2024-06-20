import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";

const Modal = ({ onClose, refreshBoards }) => {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardArthur, setBoardArthur] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCreateNewBoard = () => {
    console.log(boardArthur, boardTitle, boardCategory);
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
    window.location.reload();
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

        <h1>Create a New Board</h1>

        <div className="modal-details">
          <h4>Title:</h4>
          <input
            type="text"
            placeholder=""
            value={boardTitle}
            onChange={handleBoardTitle}
          />

          <h4>Category:</h4>
          <select onChange={(e) => handleCategory(e)}>
            <option value="SelectCategory">Select a Category</option>
            <option value="Recent">Recent</option>
            <option value="Celebration">Celebration</option>
            <option value="Thank You">Thank you</option>
            <option value="Inspiration">Inspiration</option>
          </select>

          <h4>(Optional) Arthur:</h4>
          <input
            type="text"
            placeholder=""
            value={boardArthur}
            onChange={handleBoardArthur}
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
