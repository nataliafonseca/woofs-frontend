import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Wrapper } from "./styles";

interface OptionProps {
  icon: ReactNode;
  label: string;
}

export function Option({ icon, label }: OptionProps) {
  return (
    <Wrapper>
      <div>{icon}</div>
      <p>{label}</p>
      <IoIosArrowForward size={24} />
    </Wrapper>
  );
}
