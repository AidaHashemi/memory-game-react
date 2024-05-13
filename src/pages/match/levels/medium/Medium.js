import levels from "../../../../data/cardData";
import DifficulatlyLevel from "../../../../components/MemoryGame/DifficulatlyLevel/DifficulatlyLevel";

import "./Medium.css";
const Easy = (props) => {
  return (
    <div className="medium-level-body">
      <div className="medium-level-content">
        <h1>Let's Play 🌟</h1>
        <div className="medium-game">
          <DifficulatlyLevel
            DifficulatlyData={levels.medium}
            className="level-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Easy;
