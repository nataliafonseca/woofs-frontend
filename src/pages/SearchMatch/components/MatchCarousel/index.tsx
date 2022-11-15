import { createRef, useMemo, useState } from "react";
import TinderCard from "react-tinder-card";
import { MatchButton } from "../../../../components/MatchButton";
import { FcCheckmark } from "react-icons/fc";
import { BsReplyFill } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";

import {
  Card,
  CardContainer,
  Details,
  Race,
  Stamp,
  ContainerButtonMatch,
  ContainerReply,
  CarouselContainer,
  Distance,
} from "./styles";

const db = [
  {
    id: 1,
    name: "Richard Hendricks",
    url: "./dog.png",
    age: 35,
    race: "Bichon frisé",
    distance: 2,
  },
  {
    id: 2,
    name: "Erlich Bachman",
    url: "./dog.png",
    age: 15,
    race: "Bichon frisé",
    distance: 10,
  },
  {
    id: 3,
    name: "Monica Hall",
    url: "./dog.png",
    age: 5,
    race: "Bichon frisé",
    distance: 5,
  },
  {
    id: 4,
    name: "Jared Dunn",
    url: "./dog.png",
    age: 7,
    race: "Bichon frisé",
    distance: 15,
  },
  {
    id: 5,
    name: "Dinesh Chugtai",
    url: "./dog.png",
    age: 35,
    race: "Bichon frisé",
    distance: 8,
  },
];

enum DIRECTION_TYPES {
  right = "right",
  left = "left",
}

const swipeActions = {
  [DIRECTION_TYPES.left]: () => {
    console.log("left");
  },
  [DIRECTION_TYPES.right]: () => {
    console.log("right");
  },
};

type directionType = keyof typeof DIRECTION_TYPES;

export function MatchCarousel() {
  const [usersState, setUsersState] = useState(db);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((_) => createRef()),
    [],
  );

  const currentIndex = usersState.length - 1;
  const nextIndex = usersState.length - 2;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction: directionType) => {
    const lastUserId = usersState[currentIndex].id;

    setUsersState((state) => state.filter((user) => user.id !== lastUserId));

    swipeActions[direction]();
  };

  const swipe = (dir: string) => {
    if (canSwipe) {
      childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <CarouselContainer>
      <CardContainer>
        {usersState.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={user.id}
            onSwipe={(dir) => swiped(dir)}
          >
            <Card
              img={user.url}
              isShowing={index === currentIndex}
              nextToShow={index === nextIndex}
            >
              <img src={user.url} alt="" />
              <Distance isShowing={index === currentIndex}>
                <RiMapPinLine /> {user.distance} km
              </Distance>
              <Details isShowing={index === currentIndex}>
                <div>
                  <h6>{user.name.split(" ")[0]},</h6> <b>{user.age} meses</b>
                  <Race>
                    <span>{user.race}</span>
                  </Race>
                </div>
                <Stamp>
                  <FcCheckmark size={17} />
                </Stamp>
              </Details>
            </Card>
          </TinderCard>
        ))}
      </CardContainer>

      <ContainerButtonMatch>
        <MatchButton onClick={() => swipe(DIRECTION_TYPES.left)} buttonType="deslike" />
        <ContainerReply>
          <BsReplyFill />
          <BsReplyFill />
        </ContainerReply>
        <MatchButton onClick={() => swipe(DIRECTION_TYPES.right)} buttonType="like" />
      </ContainerButtonMatch>
    </CarouselContainer>
  );
}
