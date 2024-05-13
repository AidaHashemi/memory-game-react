import { useState } from "react";
import Board from "../../components/TicTacToGame/Board";

import "./TicTacToe.css";

const playerX = "X";
const playerO = "O";
const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(playerX);

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
  return (
    <div className="tic-tac-to-container">
      <div className="tic-tac-toe-content">
        <h2>tic tac to</h2>
        <Board
          tiles={tiles}
          onTileClick={handleTileClick}
          playerTurn={player}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
