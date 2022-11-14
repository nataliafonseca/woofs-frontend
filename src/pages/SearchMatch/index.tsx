import { GreenTitle } from "../../components/GreenTitle";
import { MatchButton } from "../../components/MatchButton";
import { BsReplyFill } from "react-icons/bs";
import { MatchCarousel } from "./components/MatchCarousel";

import {
  SearchMatchContainer,
  ContainerText,
  ContainerButtonMatch,
  ContainerReply,
} from "./styles";

export function SearchMatch() {
  return (
    <>
      <SearchMatchContainer>
        <ContainerText>
          <GreenTitle>Woofs Match</GreenTitle>
        </ContainerText>

        <MatchCarousel />

        <ContainerButtonMatch>
          <MatchButton buttonType="deslike" />
          <ContainerReply>
            <BsReplyFill />
            <BsReplyFill />
          </ContainerReply>
          <MatchButton buttonType="like" />
        </ContainerButtonMatch>
      </SearchMatchContainer>
    </>
  );
}
