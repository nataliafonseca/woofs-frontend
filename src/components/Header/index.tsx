import { GoBackButton } from "../GoBackButton";
import { GreenTitle } from "../GreenTitle";

import { HeaderWrapper } from "./styles";

interface HeaderProps {
  linkTo: string;
  title: string;
}

export function Header({ linkTo, title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <GoBackButton link={linkTo} />
      <GreenTitle>{title}</GreenTitle>
    </HeaderWrapper>
  );
}
