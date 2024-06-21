import "./IndividualBoard.css";
import React from "react";
import { Link } from "react-router-dom";

const IndividualBoard = ({
  refreshBoards,
  boardId,
  boardTitle,
  boardCategory,
  boardAuthor,
  boardImage,
}) => {
  const handleDeleteBoard = () => {
    fetch(`http://localhost:3000/boards/${boardId}`, {
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

    window.location.reload();
  };

  return (
    <div>
      <section className="movie">
        <img
          id="movie-img"
          src={boardImage}
        />
        <div className="text-card">
          <h2 id="truncate">{boardTitle} </h2>
          <h4>{boardCategory}</h4>
          <h4>{boardAuthor}</h4>
        </div>

        <div className="button-container">
          <Link to={`/boards/${boardId}`}>
            <button className="button">View Board</button>
          </Link>

          <button className="button" onClick={handleDeleteBoard}>
            Delete Board
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndividualBoard;
