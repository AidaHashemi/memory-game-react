import SingleCard from "../../components/MemoryGame/SingleCard/SingleCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import levels from "../../data/cardData";
import "./Match.css";
import SideBar from "../../components/HomeDetails/SideBar/SideBar";

// let cardImages = [
//   { src: "/img/1.png", matched: false },
//   { src: "/img/2.png", matched: false },
//   { src: "/img/3.png", matched: false },
//   { src: "/img/4.png", matched: false },
//   { src: "/img/5.png", matched: false },
//   { src: "/img/6.png", matched: false },
// ];
console.log(levels);
const { easy, medium, hard } = levels;
const Match = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...easy, ...easy]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="match-container">
      <SideBar />
      <div className="match-content">
        <h1>Let's Play 🌟</h1>
        <div className="match-routes">
          <Link to="/easy">easy</Link>
          <Link to="/medium">medium</Link>
          <Link to="/hard">hard</Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
