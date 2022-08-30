import { ReactNode } from "react";

import { Container } from "./styles";

interface GreenTitleProps {
  children: ReactNode;
}

export function GreenTitle({ children }: GreenTitleProps) {
  return <Container>{children}</Container>;
}
