import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <nav className="menu">
          <RiMenu2Line size="2rem" />
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/match" className="link">
            Match Game
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
