import { IUser, SignInProps, SignUpProps } from "../contexts/AuthContext";
import { api } from "./api";

interface ILoginResponse {
  token: string;
  user: {
    email: string;
    name: string;
  };
}

export async function loginPost({ email, password }: SignInProps): Promise<ILoginResponse> {
  const response = await api.post("/sessions/login", { email, password });
  return response.data;
}

export async function getUserById(id: string): Promise<IUser> {
  const response = await api.get(`/user/${id}`);
  return { id: response.data.id, email: response.data.email };
}

export async function registerPost({
  name,
  email,
  password,
  cpf,
  phone,
}: SignUpProps): Promise<void> {
  await api.post("/user/create", {
    name,
    email,
    password,
    cpf,
    phone,
    latitude: -10.4387,
    longitude: -10.4387,
    distanceLimit: 100,
    isAdmin: true,
  });
}
