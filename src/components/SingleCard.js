import "./SingleCard.css";
const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front card" />
        <img className="back" src="/img/cover.png" alt="front card" />
      </div>
    </div>
  );
};

export default SingleCard;
