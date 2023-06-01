import { Monster } from "../../App";
import "./card.css";

type CardProps = {
  monster: Monster;
};

export const Card = ({ monster }: CardProps) => {
  return (
    <div className="card-container">
      <img
        alt="robot"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
