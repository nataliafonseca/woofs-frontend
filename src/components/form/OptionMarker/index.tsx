import { ReactNode, useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { ErrorHint } from "../Input/styles";

import { Container } from "./styles";

interface OptionMarkerProps {
  name?: string;
  id?: string;
  selected?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: boolean) => void;
  children: ReactNode;
  error?: boolean;
  helperText?: string | false | undefined;
}

export function OptionMarker({
  selected,
  children,
  onChange,
  error,
  helperText,
}: OptionMarkerProps) {
  const [isSelected, setIsSelected] = useState(selected || false);

  const handleOptionClick = () => {
    onChange && onChange(!isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <>
      {error && <ErrorHint>* {helperText}</ErrorHint>}
      <Container isSelected={isSelected}>
        {isSelected ? (
          <FaCheckSquare size={17} onClick={handleOptionClick} />
        ) : (
          <FaRegSquare size={17} onClick={handleOptionClick} />
        )}

        <p>{children}</p>
      </Container>
    </>
  );
}
