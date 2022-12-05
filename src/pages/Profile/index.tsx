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
    const defaultPet: IPet = {
      name: "Snow José",
      about: "Um principe! Lindo, fofinho, companheiro e maravilhoso!",
      age: 120,
      breed: "Maltês",
      gender: "MALE",
      pictures: ["snow1.png", "snow2.png", "snow3.png", "snow4.png", "snow5.png", "snow6.png"],
      tutorId: "",
    };

    getPet().then((response) => {
      setPet(response || defaultPet);
      setLoading(false);
    });
  }, []);

  return (
    <Container noContent={loading}>
      <ContainerText>
        <button onClick={signOut}>
          <FiLogOut />
        </button>
        <GreenTitle>Perfil</GreenTitle>
      </ContainerText>

      {loading || !pet ? (
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
