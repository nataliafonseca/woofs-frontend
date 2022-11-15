import { ReactNode, createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginPost } from "../services/authService";

export interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: (object: SignInProps) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const token = localStorage.getItem("woofs.token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  async function signIn({ email, password }: SignInProps) {
    try {
      const { token } = await loginPost({ email, password });

      localStorage.setItem("woofs.token", token);
      setIsAuthenticated(true);

      navigate("/searchmatch");
    } catch (error) {
      toast.error("E-mail e/ou senha incorretos");
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
    signOut,
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
