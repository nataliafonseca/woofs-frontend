import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../assets/loginImage.png";
import { DefaultButton } from "../../components/DefaultButton";
import { Input } from "../../components/form/Input";
import { Header } from "../../components/Header";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Container,
  ImageStyled,
  ImageWrapper,
  LinkWrapper,
  LoginWrapper,
  SectionTitle,
} from "./styles";

export function Login() {
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Header linkTo="/" title="Login" />

      <SectionTitle>Entre com seu login e senha</SectionTitle>

      <ImageWrapper>
        <ImageStyled src={loginImage} />
      </ImageWrapper>

      <LoginWrapper>
        <Input label="Email" icon={<FaUserAlt />} />
        <Input label="Senha" type="password" />
        <DefaultButton onClick={() => signIn({ email: "alisson@admin.com", password: "123456" })}>
          Login
        </DefaultButton>
      </LoginWrapper>

      <LinkWrapper>
        <Link to="/recover">Recuperar meu acesso</Link>
      </LinkWrapper>
    </Container>
  );
}
