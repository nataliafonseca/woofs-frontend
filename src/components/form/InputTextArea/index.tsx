import { TextareaHTMLAttributes } from "react";
import { InputTextAreaContainer } from "./styles";

export function InputTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <InputTextAreaContainer placeholder="Sobre" {...props} />;
}
