import { GreenTitle } from "../../components/GreenTitle";
import { MatchButton } from "../../components/MatchButton";
import { BsReplyFill } from "react-icons/bs";

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
