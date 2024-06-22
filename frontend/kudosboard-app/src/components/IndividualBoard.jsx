import "./IndividualBoard.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const IndividualBoard = ({
  boardId,
  boardTitle,
  boardCategory,
  boardAuthor,
  boardImage,
  setIsDeleted
}) => {
  const handleDeleteBoard = () => {
    fetch(`https://kudosboard-qpzh.onrender.com/boards/${boardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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

    setIsDeleted(true);
  };

  return (
    <div>
      <section className="board">
        <img
          id="board-img"
          src={boardImage}
        />
        <div className="text-card">
          <h2 id="truncate">{boardTitle} </h2>
          <h4>Category: {boardCategory}</h4>
          <h4>Author: {boardAuthor}</h4>
        </div>

        <div className="button-container">
          <Link to={`/boards/${boardId}`}>
            <button className="button">View</button>
          </Link>

          <button className="button" onClick={handleDeleteBoard}>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

IndividualBoard.propTypes = {
  boardId: PropTypes.number.isRequired,
  boardTitle: PropTypes.string.isRequired,
  boardCategory: PropTypes.string.isRequired,
  boardAuthor: PropTypes.string.isRequired,
  boardImage: PropTypes.string.isRequired,
  setIsDeleted: PropTypes.func.isRequired,
};

export default IndividualBoard;
