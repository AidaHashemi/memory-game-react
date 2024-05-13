import SideBar from "../../components/HomeDetails/SideBar/SideBar";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiAmazongames } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { SlGameController } from "react-icons/sl";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="home-content">
        <div className="game-center">
          <h1 className="title">Game Center</h1>
          <h2>Enjoy yout time and wait for more games ✨</h2>
          <div className="home-middle-icons">
            <SiAmazongames size="5em" />
            <IoGameControllerOutline size="5em" />
            <LuBrainCircuit size="5em" />
            <SlGameController size="5em" />
          </div>
        </div>
      </div>
    </div>
  );
}
