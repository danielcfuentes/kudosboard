import Search from "./Search";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import IndividualBoard from "./IndividualBoard";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [boards, setBoards] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (isDeleted) {
      fetchboards();
      setIsDeleted(false);
    }
    if (isCreated) {
      fetchboards();
      setIsCreated(false);
    } else {
      fetchboards();
    }
  }, [isDeleted, isCreated]);

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

  const getCategory = (category) => {
    fetch(`http://localhost:3000/boards/getCategory/${category.target.value}`)
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
  };

  const getBoards = boards?.map((board, index) => {
    return (
      <IndividualBoard
        key={index}
        boardId={board.id}
        boardTitle={board.title}
        boardImage={board.imageSrc}
        boardCategory={board.category}
        boardAuthor={board.author}
        setIsDeleted={setIsDeleted}
      />
    );
  });

  return (
    <div className="bodyOfPage">
      <div className="search-comp">
        <div className="search-bar">
          <Search resetSearch={fetchboards} boardsData={setBoards} />
        </div>
      </div>

      <div className="buttons_container">
        <button className="button" onClick={getCategory} value={"All"}>
          All
        </button>

        <button className="button" onClick={getCategory} value={"Recent"}>
          Recent
        </button>

        <button className="button" onClick={getCategory} value={"Celebration"}>
          Celebration
        </button>

        <button className="button" onClick={getCategory} value={"Thank You"}>
          Thank You
        </button>

        <button className="button" onClick={getCategory} value={"Inspiration"}>
          Inspiration
        </button>
      </div>

      <div className="Createcard">
        <button className="button" onClick={handleOpen}>
          Create a New Board
        </button>
      </div>

      {openModal && (
        <Modal
          onClose={handleClose}
          setIsCreated={setIsCreated}
        />
      )}

      <div className="boards">{getBoards}</div>
    </div>
  );
};

export default Dashboard;
