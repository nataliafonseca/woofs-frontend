import { ButtonHTMLAttributes } from "react";
import buttonLike from "../../assets/thumbLike.svg";
import buttonDeslike from "../../assets/thumbDeslike.svg";

import { Container } from "./styles";

interface ButtonMatchs extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "like" | "deslike";
}

export function MatchButton({ buttonType, ...rest }: ButtonMatchs) {
  const like = buttonType === "like";

  return (
    <Container {...rest}>{like ? <img src={buttonLike} /> : <img src={buttonDeslike} />}</Container>
  );
}
