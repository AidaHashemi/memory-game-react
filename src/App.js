import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  // every time by clicking the button(new game) we are gonna shuffle the cards.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  //if choice one has a value,it means that we have already clicked on first card so we update choice two
  //if choice one does not have a value, it means that we should update choice one
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //comoare two selected cards
  //use effect first fire when the program runs,then fire when [choiceOne, choiceTwo] change
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match");
        resetTurn();
      } else {
        console.log("those cards do not match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="app">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
