import { Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterAccount } from "../pages/RegisterAccount";
import { RegisterPet } from "../pages/RegisterPet";
import { SearchMatch } from "../pages/SearchMatch";

function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
}

function LoginRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/searchmatch"} replace />;
  }

  return <Outlet />;
}

export const Routes = () => (
  <Switch>
    <Route element={<LoginRoute />}>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registeraccount" element={<RegisterAccount />} />
      <Route path="/searchmatch" element={<SearchMatch />} />
      <Route path="/registerpet" element={<RegisterPet />} />
    </Route>

    <Route element={<PrivateRoute />}></Route>

    <Route path="*" element={<p>404</p>} />
  </Switch>
);
