import Search from "./Search";
import Boards from "./Boards";
import Modal from "./Modal";
import { useState } from "react";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Search />

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

      <Boards />
    </>
  );
};

export default Dashboard;
