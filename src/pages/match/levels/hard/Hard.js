import DifficulatlyLevel from "../../../../components/MemoryGame/DifficulatlyLevel/DifficulatlyLevel";
import levels from "./../../../../data/cardData";

import "./Hard.css";
const Hard = (props) => {
  return (
    <div className="hard-level-body">
      <div className="hard-level-content">
        <h1>Let's Play 🌟</h1>
        <div className="hard-game">
          <DifficulatlyLevel
            DifficulatlyData={levels.hard}
            className={"level-hard"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hard;
