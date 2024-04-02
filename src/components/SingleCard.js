import "./SingleCard.css";
const SingleCard = ({ card, handleChoice }) => {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src="/img/cover.png"
          alt="front card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
