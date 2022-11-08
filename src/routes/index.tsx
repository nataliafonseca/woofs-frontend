import { useContext } from "react";
import { Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterAccount } from "../pages/RegisterAccount";
import { RegisterPet } from "../pages/RegisterPet";
import { SearchMatch } from "../pages/SearchMatch";

function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
}

function LoginRoute() {
  const { isAuthenticated } = useContext(AuthContext);

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
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path="/registerpet" element={<RegisterPet />} />
      <Route path="/searchmatch" element={<SearchMatch />} />
    </Route>

    <Route path="*" element={<p>404</p>} />
  </Switch>
);
