import { GreenTitle } from "../../components/GreenTitle";
import { NavBar } from "../../components/NavBar";
import { MatchCard } from "./components/MatchCard";

import { Container, ContainerText, MatchesWrapper } from "./styles";

export function Matches() {
  return (
    <Container>
      <ContainerText>
        <GreenTitle>Matches</GreenTitle>
      </ContainerText>

      <MatchesWrapper>
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </MatchesWrapper>

      <NavBar />
    </Container>
  );
}
