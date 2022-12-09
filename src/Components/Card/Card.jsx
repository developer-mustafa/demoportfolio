import "./Card.css";

const Card = ({ Icon, Title, SubTitle }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={Icon} alt="" />
      </div>
      <h1>{Title}</h1>
      <span>{SubTitle}</span>
    </div>
  );
};

export default Card;
