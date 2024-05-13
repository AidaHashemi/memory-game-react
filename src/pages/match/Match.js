import { Link } from "react-router-dom";
import SideBar from "../../components/HomeDetails/SideBar/SideBar";
import "./Match.css";
const Match = () => {
  return (
    <div className="match-container">
      <SideBar />
      <div className="match-content">
        <h1>Let's Play 🌟</h1>
        <div className="match-routes">
          <Link to="/easy">easy</Link>
          <Link to="/medium">medium</Link>
          <Link to="/hard">hard</Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
