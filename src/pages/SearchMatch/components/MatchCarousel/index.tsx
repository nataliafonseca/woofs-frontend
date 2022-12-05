/* eslint-disable @typescript-eslint/no-empty-function */
import { createRef, useMemo, useState } from "react";
import { BsReplyFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { RiMapPinLine } from "react-icons/ri";
import TinderCard from "react-tinder-card";
import { MatchButton } from "../../../../components/MatchButton";
import { NoMatches } from "../../../../components/NoMatches";

import { IMatch, likeBack, removePet } from "../../../../services/matchService";
import {
  Card,
  CardContainer,
  CarouselContainer,
  ContainerButtonMatch,
  ContainerReply,
  Details,
  Distance,
  Race,
  Stamp,
} from "./styles";

enum DIRECTION_TYPES {
  right = "right",
  left = "left",
  up = "up",
  down = "down",
}

const alreadySwiped: number[] = [];
const swipeActions = {
  [DIRECTION_TYPES.left]: (id: number) => {
    removePet(id);
    alreadySwiped.push(id);
  },
  [DIRECTION_TYPES.right]: (id: number) => {
    likeBack(id);
    alreadySwiped.push(id);
  },
  [DIRECTION_TYPES.up]: () => {},
  [DIRECTION_TYPES.down]: () => {},
};

type directionType = keyof typeof DIRECTION_TYPES;

export function MatchCarousel({ petsList }: { petsList: IMatch[] }) {
  const [usersState, setUsersState] = useState(petsList);
  const childRefs: any = useMemo(
    () =>
      Array(usersState.length)
        .fill(0)
        .map(() => createRef()),
    [usersState.length],
  );

  const currentIndex = usersState.length - 1;
  const nextIndex = usersState.length - 2;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction: directionType) => {
    const lastUserId = usersState[currentIndex].id;
    setUsersState((state) => state.filter((user) => user.id !== lastUserId));
    if (!alreadySwiped.includes(lastUserId)) {
      swipeActions[direction](lastUserId);
    }
  };

  const swipe = (dir: string) => {
    if (canSwipe) {
      childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <CarouselContainer>
      {usersState.length ? (
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
      ) : (
        <NoMatches />
      )}

      <ContainerButtonMatch>
        <MatchButton
          onClick={() => swipe(DIRECTION_TYPES.left)}
          buttonType="deslike"
          disabled={!usersState.length}
        />
        <ContainerReply>
          <BsReplyFill />
          <BsReplyFill />
        </ContainerReply>
        <MatchButton
          onClick={() => swipe(DIRECTION_TYPES.right)}
          buttonType="like"
          disabled={!usersState.length}
        />
      </ContainerButtonMatch>
    </CarouselContainer>
  );
}
