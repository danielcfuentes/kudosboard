import Search from "./Search";
import Boards from "./Boards";
const Dashboard = () => {
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
        <button className="button">Create a New Board</button>
      </div>

      <Boards />
    </>
  );
};

export default Dashboard;
