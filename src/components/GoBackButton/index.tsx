import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface GoBackButtonProps {
  link: string;
}

export function GoBackButton({ link }: GoBackButtonProps) {
  return (
    <Link to={link}>
      <Container>
        <FaAngleLeft size={17} />
      </Container>
    </Link>
  );
}
