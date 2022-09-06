import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputTextArea } from "../../components/InputTextArea";
import { RadioButton } from "../../components/RadioButton";

import { Gender, RegisterPetContainer, SubTitle, InputsWrapper } from "./styles";

export function RegisterPet() {
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
      </form>
    </RegisterPetContainer>
  );
}
