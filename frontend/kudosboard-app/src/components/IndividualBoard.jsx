import "./IndividualBoard.css";

const IndividualBoard = () => {
  return (
    <div>
      <section className="movie">
        <img
          id="movie-img"
          src="https://cdn.sanity.io/images/599r6htc/regionalized/f7171a97b5bd927ed40dd8cf654507392f559396-1108x1108.png?w=514&h=514&q=75&fit=max&auto=format"
        />
        <div className="text-card">
          <h2 id="truncate">Title of Card </h2>
          <h4>Category</h4>
        </div>

        <div className="button-container">
          <button className="button">
            View Board
          </button>

          <button className="button">
            Delete Board
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndividualBoard;
