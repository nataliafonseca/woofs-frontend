import { Wrapper } from "./styles";
import { Picture } from "./Picture";
import { ImagesRow } from "./styles";

interface AlbumProps {
  pictures: string[];
}

export function Album({ pictures }: AlbumProps) {
  return (
    <Wrapper>
      <ImagesRow>
        <Picture src={pictures[1]} height="131px" width="100%" />
        <Picture src={pictures[2]} height="131px" width="100%" />
        <Picture src={pictures[3]} height="131px" width="100%" />
      </ImagesRow>
      <ImagesRow>
        <Picture src={pictures[4]} height="204px" width="100%" />
        <Picture src={pictures[5]} height="204px" width="100%" />
      </ImagesRow>
    </Wrapper>
  );
}
