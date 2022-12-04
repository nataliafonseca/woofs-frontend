import errorDog from "../../assets/errorDog.svg";
import { DefaultButton } from "../../components/DefaultButton";
import { useNavigate } from "react-router-dom";

import { NotFoundContainer } from "./styles";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <h1>Oops!</h1>

      <img src={errorDog} />

      <b>
        Sentimos muito, <br /> mas algo deu errado!
      </b>

      <span>
        Tente novamente <br /> em instantes.
      </span>

      <DefaultButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </DefaultButton>
    </NotFoundContainer>
  );
}
