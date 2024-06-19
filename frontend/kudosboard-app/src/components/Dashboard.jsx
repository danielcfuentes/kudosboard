import Search from "./Search";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import IndividualBoard from "./IndividualBoard";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [boards, setBoards] = useState([]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    fetchboards();
  }, []);

  async function fetchboards() {
    fetch("http://localhost:3000/boards")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBoards(data);
      })
      .catch((error) => {
        console.error("Error fetching photo:", error);
      });
  }

  const getBoards = boards.map((board, index) => {
    return (
      <IndividualBoard
        key={index}
        boardTitle={board.title}
        boardCategory={board.category}
        boardAuthor={board.author}
      />
    );
  });

  return (
    <div className="bodyOfPage">
      <div className="search-comp">
        <Search />
      </div>

      <div className="buttons_container">
        <button className="button">All</button>

        <button className="button">Recent</button>

        <button className="button">Celebration</button>

        <button className="button">Thank You</button>

        <button className="button">Inspiration</button>
      </div>

      <div className="Createcard">
        <button className="button" onClick={handleOpen}>
          Create a New Board
        </button>
      </div>

      {openModal && <Modal onClose={handleClose} />}

      {getBoards}
    </div>
  );
};

export default Dashboard;
