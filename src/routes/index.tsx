import { Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { NotFound } from "../pages/404";

import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Matches } from "../pages/Matches";
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

      <Route path="/registerpet" element={<RegisterPet />} />

      <Route path="/searchmatch" element={<SearchMatch />} />
      <Route path="/matches" element={<Matches />} />
    </Route>

    <Route element={<PrivateRoute />}></Route>

    <Route path="*" element={<NotFound />} />
  </Switch>
);
