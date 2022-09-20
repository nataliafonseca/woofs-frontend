import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputTextArea } from "../../components/InputTextArea";
import { RadioButton } from "../../components/RadioButton";
import thumb from "../../assets/thumb.svg";

import {
  Gender,
  RegisterPetContainer,
  SubTitle,
  InputsWrapper,
  Interests,
  ToggleItem,
  InterestsLine,
  Distance,
  StyledTrack,
  StyledRange,
  StyledThumb,
  DistanceWrapper,
  DistanceNumber,
} from "./styles";

export function RegisterPet() {
  const [distanceNumber, setDistanceNumber] = useState(10);

  return (
    <RegisterPetContainer>
      <Header linkTo="/registeraccount" title="Cadastrar Pet" />

      <form>
        <SubTitle>Escolha o gênero</SubTitle>
        <Gender>
          <RadioButton title="Macho" value="Macho" />
          <RadioButton title="Fêmea" value="Fêmea" />
        </Gender>

        <SubTitle>Informações do pet</SubTitle>
        <InputsWrapper>
          <Input type="text" label="Nome" />
          <Input type="text" label="Raça" />
          <Input type="number" label="Idade em meses" />
          <InputTextArea />
        </InputsWrapper>

        <SubTitle>Interesses</SubTitle>
        <Interests type="multiple">
          <InterestsLine>
            <ToggleItem value="Raça">Raça</ToggleItem>
            <ToggleItem value="Vacinado">Vacinado</ToggleItem>
            <ToggleItem value="Idade">Idade</ToggleItem>
          </InterestsLine>
          <InterestsLine>
            <ToggleItem value="Proximidade">Proximidade</ToggleItem>
            <ToggleItem value="Gênero">Gênero</ToggleItem>
          </InterestsLine>
        </Interests>

        <SubTitle>Proximidade</SubTitle>
        <DistanceWrapper>
          <Distance
            onValueChange={(value) => {
              setDistanceNumber(value[0]);
            }}
            defaultValue={[10]}
            max={200}
            step={1}
          >
            <StyledTrack>
              <StyledRange />
            </StyledTrack>
            <StyledThumb>
              <img src={thumb} alt="" />
            </StyledThumb>
          </Distance>
          <DistanceNumber>{distanceNumber} km</DistanceNumber>
        </DistanceWrapper>
      </form>
    </RegisterPetContainer>
  );
}
