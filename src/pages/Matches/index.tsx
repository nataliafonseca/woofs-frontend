import { useEffect, useState } from "react";
import { GreenTitle } from "../../components/GreenTitle";
import { Loading } from "../../components/Loading";
import { NavBar } from "../../components/NavBar";
import { NoContent } from "../../components/NoMatches";
import { getLikes, IMatch, likeBack, removePet } from "../../services/matchService";
import { MatchCard } from "./components/MatchCard";

import { Container, ContainerText, MatchesWrapper } from "./styles";

export function Matches() {
  const [list, setList] = useState([] as IMatch[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLikes().then((response) => {
      setList(response);
      setLoading(false);
    });
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
    <Container noContent={loading || !list.length}>
      <ContainerText>
        <GreenTitle>Matches</GreenTitle>
      </ContainerText>

      {loading ? (
        <Loading />
      ) : (
        <>
          {list.length ? (
            <MatchesWrapper>
              {list.map((pet) => (
                <MatchCard key={pet.id} pet={pet} onDelete={onDelete} onLike={onLike} />
              ))}
            </MatchesWrapper>
          ) : (
            <NoContent
              title={"Seu bichinho ainda não tem Matches"}
              text={"Continue buscando e logo encontrará um par perfeito para ele."}
              titleBellowImage={true}
            />
          )}
        </>
      )}
      <NavBar />
    </Container>
  );
}
