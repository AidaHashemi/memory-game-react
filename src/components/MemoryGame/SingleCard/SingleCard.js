import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  function handleClick() {
    // only when disables is false and the card is not disabled
    if (!disabled) {
      handleChoice(card);
    }
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
