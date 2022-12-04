/* eslint-disable prettier/prettier */
import likeSmall from '../../../../assets/like-small.svg'
import closeSmall from '../../../../assets/close-small.svg'

import { MatchCardContainer, PetInfosWrapper, Features, Controls, Divisor } from "./styles";

export function MatchCard() {
  return (
    <MatchCardContainer>
      <PetInfosWrapper>
        <Features>
          Flor,<span>35 meses</span>
        </Features>

        <Controls>
          <button>
            <img src={closeSmall} height={16} />
          </button>

          <Divisor />

          <button>
            <img src={likeSmall} height={20} />
          </button>
        </Controls>
      </PetInfosWrapper>
    </MatchCardContainer>
  );
}
