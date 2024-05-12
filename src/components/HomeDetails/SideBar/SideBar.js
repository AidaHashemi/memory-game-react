import { Link } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <nav className="menu">
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
