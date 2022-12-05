import { Container, Image, ImageWrapper } from "./styles";

interface PictureProps {
  height?: string;
  width?: string;
  src: string;
}

export function Picture({ height, width, src }: PictureProps) {
  return (
    <Container width={width} height={height}>
      <ImageWrapper>
        <Image src={src} />
      </ImageWrapper>
    </Container>
  );
}
