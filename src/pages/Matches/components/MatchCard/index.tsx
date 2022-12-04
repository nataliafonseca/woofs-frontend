/* eslint-disable prettier/prettier */
import likeSmall from '../../../../assets/like-small.svg'
import closeSmall from '../../../../assets/close-small.svg'

import { MatchCardContainer, PetInfosWrapper, Features, Controls, Divisor } from "./styles";
import { IMatch } from '../../../../services/matchService';

interface MatchCardProps {
  pet: IMatch
  onDelete: (id: number) => void;
  onLike: (id: number) => void;
}

export function MatchCard({ pet, onDelete, onLike }: MatchCardProps) {
  return (
    <MatchCardContainer image={pet.url}>
      <PetInfosWrapper>
        <Features>
          {pet.name.split(" ")[0]}, <span>{pet.age} meses</span>
        </Features>

        <Controls>
          <button onClick={() => onDelete(pet.id)}>
            <img src={closeSmall} height={16} />
          </button>

          <Divisor />

          <button onClick={() => onLike(pet.id)}>
            <img src={likeSmall} height={20} />
          </button>
        </Controls>
      </PetInfosWrapper>
    </MatchCardContainer>
  );
}
