import { useFormik } from "formik";
import * as yup from "yup";
import { DefaultButton } from "../../components/DefaultButton";
import { Input } from "../../components/form/Input";
import { OptionMarker } from "../../components/form/OptionMarker";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";
import { ButtonWrapper, Container, InputsWrapper, SectionTitle, TermsWrapper } from "./styles";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  cpf: "",
  password: "",
  passwordConfirmation: "",
  terms: false,
};

const validationSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Insira um email válido").required("Campo obrigatório").max(100),
  phone: yup.string().required("Campo obrigatório").min(11, "Insira um telefone válido"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Insira um CPF válido")
    .max(11, "Insira um CPF válido"),
  password: yup.string().required("Campo obrigatório"),
  passwordConfirmation: yup.string().oneOf([yup.ref("password"), null], "As senhas não conferem"),
  terms: yup.boolean().oneOf([true], "É preciso aceitar os termos de uso"),
});

export function RegisterAccount() {
  const { signUp } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      signUp(values);
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <Header linkTo="/" title="Criar Conta" />

      <InputsWrapper>
        <SectionTitle>Informações pessoais</SectionTitle>
        <Input
          name="name"
          id="name"
          label="Nome"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          name="phone"
          id="phone"
          label="Telefone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && !!formik.errors.phone}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Input
          name="cpf"
          id="cpf"
          label="CPF"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cpf && !!formik.errors.cpf}
          helperText={formik.touched.cpf && formik.errors.cpf}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="Senha"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          label="Repita a senha"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.passwordConfirmation && !!formik.errors.passwordConfirmation}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        />
      </InputsWrapper>

      <TermsWrapper>
        <SectionTitle>Termos e informações</SectionTitle>
        <OptionMarker>Receber informações por e-mail</OptionMarker>
        <OptionMarker
          name="terms"
          id="terms"
          selected={formik.values.terms}
          onChange={(value) => formik.setFieldValue("terms", value)}
          error={formik.touched.terms && !!formik.errors.terms}
          helperText={formik.touched.terms && formik.errors.terms}
        >
          Aceitar <span>termos de uso</span>
        </OptionMarker>
      </TermsWrapper>

      <ButtonWrapper>
        <DefaultButton type="submit">Avançar</DefaultButton>
      </ButtonWrapper>
    </Container>
  );
}
