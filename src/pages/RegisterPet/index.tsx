import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/form/Input";
import { InputTextArea } from "../../components/form/InputTextArea";
import { RadioButton } from "../../components/form/RadioButton";
import { InputFile } from "../../components/form/InputFile";
import { DefaultButton } from "../../components/DefaultButton";
import thumb from "../../assets/thumb.svg";
import { useFormik } from "formik";
import * as yup from "yup";

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
import { registerPet } from "../../services/petService";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  about: "",
  age: "",
  breed: "",
  gender: "MALE",
};

const validationSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  age: yup.number().required("Campo obrigatório"),
});

export function RegisterPet() {
  const navigate = useNavigate();
  const [distanceNumber, setDistanceNumber] = useState(10);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await registerPet({
        name: values.name,
        about: values.about,
        age: Number(values.age),
        breed: values.breed.length ? values.breed : "SRD",
        gender: values.gender,
      });

      navigate("/searchmatch");
    },
  });

  return (
    <RegisterPetContainer>
      <Header linkTo="/registeraccount" title="Cadastrar Pet" />

      <form onSubmit={formik.handleSubmit}>
        <SubTitle>Escolha o gênero</SubTitle>
        <Gender
          id="gender"
          name="gender"
          value={formik.values.gender}
          onValueChange={(value) => formik.setFieldValue("gender", value)}
        >
          <RadioButton title="Macho" value="MALE" />
          <RadioButton title="Fêmea" value="FEMALE" />
        </Gender>

        <SubTitle>Informações do pet</SubTitle>
        <InputsWrapper>
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
            label="Nome"
          />
          <Input
            id="age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.age && !!formik.errors.age}
            helperText={formik.touched.age && formik.errors.age}
            type="number"
            label="Idade em meses"
          />
          <Input
            id="breed"
            name="breed"
            value={formik.values.breed}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            label="Raça"
          />
          <InputTextArea
            id="about"
            name="about"
            value={formik.values.about}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
