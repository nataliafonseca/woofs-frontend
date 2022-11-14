import { SignInProps } from "../contexts/AuthContext";
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
