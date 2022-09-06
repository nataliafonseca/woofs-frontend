import { RadioButtonContainer } from "./styles";

interface RadioButtonProps {
  title: string;
  value: string;
}

export function RadioButton({ title, value }: RadioButtonProps) {
  return <RadioButtonContainer value={value}>{title}</RadioButtonContainer>;
}
