import { useEffect, useState } from "react";
import { FiCheckSquare, FiEdit, FiImage, FiLogOut } from "react-icons/fi";
import { GreenTitle } from "../../components/GreenTitle";
import { Loading } from "../../components/Loading";
import { NavBar } from "../../components/NavBar";
import { useAuth } from "../../contexts/AuthContext";
import { getPet, IPet } from "../../services/petService";
import { Album } from "./components/Album";
import { Option } from "./components/Option";
import { Container, ContainerText, ProfilePicture } from "./styles";

export function Profile() {
  const { signOut } = useAuth();

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
        <button onClick={signOut}>
          <FiLogOut />
        </button>
        <GreenTitle>Perfil</GreenTitle>
      </ContainerText>

      {loading ? (
        <Loading />
      ) : (
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
