import { api } from "./api";

export interface PetRegisterProps {
  name: string;
  about: string;
  age: number;
  breed: string;
  gender: string;
}

export interface IPet {
  name: string;
  about: string;
  age: number;
  breed: string;
  gender: string;
  pictures: string[];
  tutorId: string;
}

export async function registerPet({
  name,
  about,
  age,
  breed,
  gender,
}: PetRegisterProps): Promise<void> {
  const userString = localStorage.getItem("woofs.user");
  const user = userString && JSON.parse(userString);

  await api.post("/pet/create", {
    name,
    about,
    age,
    breed,
    gender,
    pictures: ["snow1.png", "snow2.png", "snow3.png", "snow4.png", "snow5.png", "snow6.png"],
    tutorId: user.id,
    vaccination: true,
  });
}

export async function getPet(): Promise<IPet | null> {
  const userString = localStorage.getItem("woofs.user");
  const user = userString && JSON.parse(userString);

  const response = await api.get("pet");
  const mine = response.data.data.filter((pet: IPet) => pet.tutorId === user.id);

  if (mine.length === 0) {
    return null;
  }

  return {
    name: mine[0].name,
    about: mine[0].about,
    age: mine[0].age,
    breed: mine[0].breed,
    gender: mine[0].gender,
    pictures: mine[0].pictures,
    tutorId: mine[0].tutorId,
  };
}
