import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/form/Input";
import { InputTextArea } from "../../components/form/InputTextArea";
import { RadioButton } from "../../components/form/RadioButton";
import { InputFile } from "../../components/form/InputFile";
import { DefaultButton } from "../../components/DefaultButton";
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
  InputFilesGrid,
  Column,
  ImagesRow,
  ButtonWrapper,
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
            max={110}
            step={1}
          >
            <StyledTrack>
              <StyledRange />
            </StyledTrack>
            <StyledThumb>
              <img src={thumb} alt="" />
            </StyledThumb>
          </Distance>
          <DistanceNumber>Até {distanceNumber} km</DistanceNumber>
        </DistanceWrapper>

        <SubTitle>Fotos</SubTitle>
        <InputFilesGrid>
          <Column>
            <InputFile />
            <InputFile />
          </Column>

          <InputFile width="100%" heigth="204px" />
        </InputFilesGrid>

        <ImagesRow>
          <InputFile heigth="131px" width="100%" />
          <InputFile heigth="131px" width="100%" />
          <InputFile heigth="131px" width="100%" />
        </ImagesRow>

        <ImagesRow>
          <InputFile heigth="204px" width="100%" />
          <InputFile heigth="204px" width="100%" />
        </ImagesRow>

        <ButtonWrapper>
          <DefaultButton type="submit">Criar perfil</DefaultButton>
        </ButtonWrapper>
      </form>
    </RegisterPetContainer>
  );
}
