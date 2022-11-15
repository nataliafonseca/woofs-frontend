import { GreenTitle } from "../../components/GreenTitle";
import { MatchCarousel } from "./components/MatchCarousel";

import { SearchMatchContainer, ContainerText } from "./styles";

export function SearchMatch() {
  return (
    <>
      <SearchMatchContainer>
        <ContainerText>
          <GreenTitle>Achar par perfeito</GreenTitle>
        </ContainerText>

        <MatchCarousel />
      </SearchMatchContainer>
    </>
  );
}
