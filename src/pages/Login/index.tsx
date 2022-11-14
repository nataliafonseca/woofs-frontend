import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../assets/loginImage.png";
import { DefaultButton } from "../../components/DefaultButton";
import { Input } from "../../components/form/Input";
import { Header } from "../../components/Header";
import { useFormik } from "formik";
import * as yup from "yup";

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

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email("Insira um email válido").required("Campo obrigatório").max(100),
    password: yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => signIn(values),
  });

  return (
    <Container>
      <Header linkTo="/" title="Login" />

      <SectionTitle>Entre com seu login e senha</SectionTitle>

      <ImageWrapper>
        <ImageStyled src={loginImage} />
      </ImageWrapper>

      <LoginWrapper onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // error={formik.touched.email && !!formik.errors.email}
          // helperText={formik.touched.email && formik.errors.email}
          icon={<FaUserAlt />}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="Senha"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <DefaultButton type="submit">Login</DefaultButton>
      </LoginWrapper>

      <LinkWrapper>
        <Link to="/recover">Recuperar meu acesso</Link>
      </LinkWrapper>
    </Container>
  );
}
