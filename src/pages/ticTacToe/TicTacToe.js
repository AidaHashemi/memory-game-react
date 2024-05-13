import { useState, useEffect } from "react";
import Board from "../../components/TicTacToGame/Board";

import "./TicTacToe.css";

const playerX = "X";
const playerO = "O";

const winnerCombinations = [
  //ROWS
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass) {
  for (const { combo, strikeClass } of winnerCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
    }
  }
}
const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(playerX);
  const [strikeClass, setStrikeClass] = useState("");

  const handleTileClick = (index) => {
    // if there is a value there do not allow any value to be added again
    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = player;
    setTiles(newTiles);
    if (player === playerX) {
      setPlayer(playerO);
    } else {
      setPlayer(playerX);
    }
  };

  //every times tiles change,checkWinner function will run
  useEffect(() => {
    checkWinner(tiles, setStrikeClass);
  }, [tiles]);
  return (
    <div className="tic-tac-to-container">
      <div className="tic-tac-toe-content">
        <h2>tic tac to</h2>
        <Board
          tiles={tiles}
          onTileClick={handleTileClick}
          playerTurn={player}
          strikeClass={strikeClass}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
