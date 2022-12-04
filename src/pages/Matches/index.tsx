import { useEffect, useState } from "react";
import { GreenTitle } from "../../components/GreenTitle";
import { NavBar } from "../../components/NavBar";
import { getLikes, IMatch, likeBack, removePet } from "../../services/matchService";
import { MatchCard } from "./components/MatchCard";

import { Container, ContainerText, MatchesWrapper } from "./styles";

export function Matches() {
  const [list, setList] = useState([] as IMatch[]);

  useEffect(() => {
    getLikes().then((response) => setList(response));
  }, []);

  const onDelete = async (id: number) => {
    setList((list) => list.filter((pet) => pet.id !== id));
    await removePet(id);
  };

  const onLike = async (id: number) => {
    setList((list) => list.filter((pet) => pet.id !== id));
    await likeBack(id);
  };

  return (
    <Container>
      <ContainerText>
        <GreenTitle>Matches</GreenTitle>
      </ContainerText>

      <MatchesWrapper>
        {list.map((pet) => (
          <MatchCard key={pet.id} pet={pet} onDelete={onDelete} onLike={onLike} />
        ))}
      </MatchesWrapper>

      <NavBar />
    </Container>
  );
}
