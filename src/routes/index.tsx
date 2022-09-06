import { Route, Routes as Switch } from "react-router-dom";

import { Main } from "../pages/Main";
import { Login } from "../pages/Login";
import { RegisterAccount } from "../pages/RegisterAccount";
import { RegisterPet } from "../pages/RegisterPet";
// import { PrivateRoute } from './PrivateRoute'

export const Routes = () => (
  <Switch>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registeraccount" element={<RegisterAccount />} />
    <Route path="/registerpet" element={<RegisterPet />} />
    <Route path="*" element={<p>404</p>} />
  </Switch>
);
