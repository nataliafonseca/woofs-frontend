import { Link } from "react-router-dom";
import { DefaultButton } from "../../components/DefaultButton";
import { Header } from "../../components/Header";
import { Input } from "../../components/form/Input";
import { OptionMarker } from "../../components/form/OptionMarker";

import { ButtonWrapper, Container, InputsWrapper, SectionTitle, TermsWrapper } from "./styles";

export function RegisterAccount() {
  return (
    <Container>
      <Header linkTo="/" title="Criar Conta" />

      <InputsWrapper>
        <SectionTitle>Informações pessoais</SectionTitle>
        <Input label="Nome" />
        <Input label="E-mail" />
        <Input label="Telefone" />
        <Input label="CPF" />
        <Input label="Senha" type="password" />
        <Input label="Repita a senha" type="password" />
      </InputsWrapper>

      <TermsWrapper>
        <SectionTitle>Termos e informações</SectionTitle>
        <OptionMarker>Receber informações por e-mail</OptionMarker>
        <OptionMarker>
          Aceitar <span>termos de uso</span>
        </OptionMarker>
      </TermsWrapper>

      <Link to="/registerpet">
        <ButtonWrapper>
          <DefaultButton>Avançar</DefaultButton>
        </ButtonWrapper>
      </Link>
    </Container>
  );
}
