import "./IndividualBoard.css";

const IndividualBoard = ({
  refreshBoards,
  boardId,
  boardTitle,
  boardCategory,
  boardAuthor,
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
          src="https://cdn.sanity.io/images/599r6htc/regionalized/f7171a97b5bd927ed40dd8cf654507392f559396-1108x1108.png?w=514&h=514&q=75&fit=max&auto=format"
        />
        <div className="text-card">
          <h2 id="truncate">{boardTitle} </h2>
          <h4>{boardCategory}</h4>
          <h4>{boardAuthor}</h4>
        </div>

        <div className="button-container">
          <button className="button">View Board</button>

          <button className="button" onClick={handleDeleteBoard}>
            Delete Board
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndividualBoard;
