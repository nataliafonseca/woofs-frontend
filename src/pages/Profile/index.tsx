import { useEffect, useState } from "react";
import { GreenTitle } from "../../components/GreenTitle";
import { NavBar } from "../../components/NavBar";
import { getPet, IPet } from "../../services/petService";
import { Option } from "./components/Option";
import { Container, ContainerText, ProfilePicture } from "./styles";
import { FiCheckSquare, FiEdit, FiImage } from "react-icons/fi";
import { Album } from "./components/Album";

export function Profile() {
  const [loading, setLoading] = useState(true);
  const [pet, setPet] = useState({} as IPet);

  useEffect(() => {
    getPet().then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPet(response!);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <ContainerText>
        <GreenTitle>Perfil</GreenTitle>
      </ContainerText>

      {!loading && (
        <>
          <ProfilePicture src={pet.pictures[0]} />
          <h2>{pet.name}</h2>
          <div>
            <Option icon={<FiEdit />} label="Editar Perfil" />
            <Option icon={<FiCheckSquare />} label="Editar Interesses" />
            <Option icon={<FiImage />} label="Modificar album de fotos" />
          </div>
          <Album pictures={pet.pictures} />
        </>
      )}
      <NavBar />
    </Container>
  );
}
