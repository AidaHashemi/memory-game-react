import SideBar from "../../components/HomeDetails/SideBar/SideBar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="home-content">
        <div className="game-center">
          <h1 className="title">Game Center</h1>
        </div>
      </div>
    </div>
  );
}
