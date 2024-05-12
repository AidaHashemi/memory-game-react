import SideBar from "../../components/HomeDetails/SideBar/SideBar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <h1 className="title">Game Center</h1>
    </div>
  );
}
