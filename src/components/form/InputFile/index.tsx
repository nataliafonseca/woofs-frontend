import { useRef, useState } from "react";
import emptyImage from "../../../assets/emptyImage.svg";
import trash from "../../../assets/trash.svg";

import {
  FileInputContainer,
  EmptyInputContainer,
  ImageSelected,
  SelectedImageWrapper,
  TrashButton,
} from "./styles";

interface InputFileProps {
  heigth?: string;
  width?: string;
}

export function InputFile({ heigth, width }: InputFileProps) {
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

  function handleChoosePhoto() {
    if (!inputRef.current || img) return;

    inputRef.current.click();
  }

  function handleClearImg() {
    if (!inputRef.current) return;

    inputRef.current.value = "";
    setImg("");
  }

  return (
    <FileInputContainer width={width} heigth={heigth} hasImage={!!img} onClick={handleChoosePhoto}>
      <input
        type="file"
        accept="image"
        ref={inputRef}
        onChange={(event) => checkFileType(event.target)}
        hidden
      />

      {img ? (
        <SelectedImageWrapper>
          <TrashButton onClick={handleClearImg}>
            <img src={trash} alt="" />
          </TrashButton>
          <ImageSelected src={img} />
        </SelectedImageWrapper>
      ) : (
        <EmptyInputContainer>
          <img src={emptyImage} alt="" />
          <span>Adicionar foto</span>
        </EmptyInputContainer>
      )}
    </FileInputContainer>
  );
}
