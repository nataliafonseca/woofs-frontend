import { ButtonHTMLAttributes, ReactNode, useState } from "react";

import { Container } from "./styles";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void;
  selectable?: boolean;
  children: ReactNode;
}

export function DefaultButton({ action, selectable, children, ...rest }: DefaultButtonProps) {
  const [isSelected, setSelected] = useState(false);

  const handleButtonClick = () => {
    if (action) return action();

    if (selectable) setSelected(!isSelected);
  };

  return (
    <Container onClick={handleButtonClick} isSelected={isSelected} {...rest}>
      {children}
    </Container>
  );
}
