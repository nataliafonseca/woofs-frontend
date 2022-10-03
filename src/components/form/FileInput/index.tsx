import { useRef, useState } from "react";
import { FileInputContainer } from "./styles";

export function FileInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string>("");

  function convertImg(file: any) {
    const reader = new FileReader();

    reader.onload = function () {
      setImg(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function checkFileType(file: any) {
    const ext = file.value.match(/\.(.+)$/)[1];

    if (!inputRef.current) return;

    switch (ext) {
      case "jpg":
      case "jpeg":
      case "png":
        convertImg(file.files[0]);
        break;
      default:
        inputRef.current.value = "";
    }
  }

  return (
    <FileInputContainer>
      <input
        type="file"
        accept="image"
        ref={inputRef}
        onChange={(event) => checkFileType(event.target)}
      />

      {img && <img src={img} height={50} />}
    </FileInputContainer>
  );
}
