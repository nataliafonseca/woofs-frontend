import { useEffect, useState } from "react";
import { GreenTitle } from "../../components/GreenTitle";
import { Loading } from "../../components/Loading";
import { NavBar } from "../../components/NavBar";
import { getPetsList, IMatch } from "../../services/matchService";
import { MatchCarousel } from "./components/MatchCarousel";

import { ContainerText, SearchMatchContainer } from "./styles";

export function SearchMatch() {
  const [petsList, setPetsList] = useState([] as IMatch[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetsList().then((response) => {
      setPetsList(response.filter((pet) => !pet.match));
      setLoading(false);
    });
  }, []);
  return (
    <SearchMatchContainer noContent={loading || !petsList.length}>
      <ContainerText>
        <GreenTitle>Achar par perfeito</GreenTitle>
      </ContainerText>

      {loading ? <Loading /> : <MatchCarousel petsList={petsList} />}

      <NavBar />
    </SearchMatchContainer>
  );
}
