import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../assets/loginImage.png";
import { DefaultButton } from "../../components/DefaultButton";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Container,
  ImageStyled,
  ImageWrapper,
  LinkWrapper,
  LoginWrapper,
  SectionTitle,
} from "./styles";

export function Login() {
  return (
    <Container>
      <Header linkTo="/" title="Login" />

      <SectionTitle>Entre com seu login e senha</SectionTitle>

      <ImageWrapper>
        <ImageStyled src={loginImage} />
      </ImageWrapper>

      <LoginWrapper>
        <Input label="Login" icon={<FaUserAlt />} />
        <Input label="Senha" type="password" />
        <DefaultButton>Login</DefaultButton>
      </LoginWrapper>

      <LinkWrapper>
        <Link to="/recover">Recuperar meu acesso</Link>
      </LinkWrapper>
    </Container>
  );
}
