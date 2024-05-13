import levels from "../../../../data/cardData";
import DifficulatlyLevel from "../../../../components/MemoryGame/DifficulatlyLevel/DifficulatlyLevel";

import "./Easy.css";

const Easy = (props) => {
  return (
    <div className="easy-level-body">
      <div className="easy-level-content">
        <h1>Let's Play 🌟</h1>
        <div className="easy-game">
          <DifficulatlyLevel
            DifficulatlyData={levels.easy}
            className="level-easy"
          />
        </div>
      </div>
    </div>
  );
};

export default Easy;
