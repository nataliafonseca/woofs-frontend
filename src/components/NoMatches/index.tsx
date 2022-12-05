import { Wrapper } from "./styles";
// import NoMatchesSrc from "../../assets/noMatchesBL.png";
import NoMatchesSrc from "../../assets/doguinho-forever-alone.svg";

interface NoContentProps {
  title: string;
  text?: string;
  titleBellowImage?: boolean;
}

export function NoContent({ title, text, titleBellowImage }: NoContentProps) {
  return (
    <Wrapper titleBellow={titleBellowImage || false}>
      {!titleBellowImage && <h2>{title}</h2>}
      <img src={NoMatchesSrc} />
      {titleBellowImage && <h2>{title}</h2>}
      <p>{text}</p>
    </Wrapper>
  );
}
