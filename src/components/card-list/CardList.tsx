import React from "react";
import "./cardList.css";
import { Card } from "../card/Card";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

export const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
