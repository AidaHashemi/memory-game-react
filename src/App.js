import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/1.png" },
  { src: "/img/2.png" },
  { src: "/img/3.png" },
  { src: "/img/4.png" },
  { src: "/img/5.png" },
  { src: "/img/6.png" },
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

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front card" />
              <img className="back" src="/img/cover.png" alt="front card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
