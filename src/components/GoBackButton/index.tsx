import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface GoBackButtonProps {
  link: string;
  children: ReactNode;
}

export function GoBackButton({ link, children }: GoBackButtonProps) {
  return (
    <Link to={link}>
      <Container>
        <div>{children}</div>
      </Container>
    </Link>
  );
}
