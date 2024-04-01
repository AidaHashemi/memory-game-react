import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "../public/img/1.png" },
  { src: "../public/img/2.png" },
  { src: "../public/img/3.png" },
  { src: "../public/img/4.png" },
  { src: "../public/img/5.png" },
  { src: "../public/img/6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="app">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
