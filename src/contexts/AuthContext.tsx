import { ReactNode, createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

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

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const token = localStorage.getItem("woofs.token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  async function signIn({ email, password }: SignInProps) {
    try {
      const { token } = await loginPost({ email, password });

      localStorage.setItem("woofs.token", token);
      setIsAuthenticated(true);

      navigate("/");
    } catch (error) {
      console.log(error);
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

export { AuthContext, AuthProvider };
