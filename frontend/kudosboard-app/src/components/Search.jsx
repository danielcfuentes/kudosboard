import "./Search.css";
import { useEffect, useState } from "react";
const Search = ({ resetSearch, boardsData }) => {
  const [boardTitle, setBoardTitle] = useState("");

  const handleSearchBoard = (event) => {
    const value = event.target.value;
    setBoardTitle(value);

    if (boardTitle === "") {
      resetSearch();
    } else {
      performSearch(value);
    }
  };

  const performSearch = (value) => {
    console.log("performing search");
    fetch(`http://localhost:3000/boards/getTitle/${value}`, {
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
      .then((data) => boardsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };
  return (
    <>
      <form className="searchContainer">
        <div className="Card">
          <div className="CardInner">
            <div className="container">
              <div className="Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#657789"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div className="InputContainer">
                <input
                  type="text"
                  placeholder="Search boards..."
                  value={boardTitle}
                  onChange={handleSearchBoard}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
