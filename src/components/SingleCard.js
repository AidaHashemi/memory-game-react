import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped }) => {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src="/img/cover.png"
          alt="back card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
