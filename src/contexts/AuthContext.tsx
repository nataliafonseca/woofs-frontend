import { ReactNode, createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { decodeJwt } from "jose";
import { getUserById, loginPost, registerPost } from "../services/authService";

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

export interface IUser {
  id: string;
  email: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn: (object: SignInProps) => Promise<void>;
  signUp: (object: SignUpProps) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const token = localStorage.getItem("woofs.token");
  const storedUser = localStorage.getItem("woofs.user");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  async function signIn({ email, password }: SignInProps) {
    try {
      const { token } = await loginPost({ email, password });

      localStorage.setItem("woofs.token", token);
      setIsAuthenticated(true);

      const userId = decodeJwt(token).sub;
      const loggedUser = userId && (await getUserById(userId));
      loggedUser && setUser(loggedUser);
      localStorage.setItem("woofs.user", JSON.stringify(loggedUser));

      navigate("/searchmatch");
    } catch (error) {
      toast.error("E-mail e/ou senha incorretos");
    }
  }

  async function signUp({ name, email, password, cpf, phone }: SignUpProps) {
    try {
      await registerPost({
        name,
        email,
        password,
        cpf,
        phone,
      });

      const { token } = await loginPost({ email, password });

      localStorage.setItem("woofs.token", token);
      setIsAuthenticated(true);
      const userId = decodeJwt(token).sub;

      const loggedUser = userId && (await getUserById(userId));
      loggedUser && setUser(loggedUser);
      localStorage.setItem("woofs.user", JSON.stringify(loggedUser));

      navigate("/registerpet");
    } catch (error) {
      toast.error("E-mail já cadastrado");
    }
  }

  function signOut() {
    localStorage.removeItem("woofs.token");
    setIsAuthenticated(false);

    navigate("/");
  }

  const authContext = {
    isAuthenticated,
    signIn,
    signUp,
    signOut,
    user,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
