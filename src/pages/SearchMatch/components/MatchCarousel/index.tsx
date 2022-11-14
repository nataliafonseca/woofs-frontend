import TinderCard from "react-tinder-card";
import { Card, CardContainer } from "./styles";

const db = [
  {
    name: "Richard Hendricks",
    url: "./img/richard.jpg",
  },
  {
    name: "Erlich Bachman",
    url: "./img/erlich.jpg",
  },
  {
    name: "Monica Hall",
    url: "./img/monica.jpg",
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg",
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg",
  },
];

export function MatchCarousel() {
  const characters = db;

  const swiped = (direction: any) => {
    console.log(direction);
  };

  return (
    <CardContainer>
      {characters.map((character) => (
        <TinderCard className="swipe" key={character.name} onSwipe={(dir) => swiped(dir)}>
          <Card>
            <h3>{character.name}</h3>
          </Card>
        </TinderCard>
      ))}
    </CardContainer>
  );
}
