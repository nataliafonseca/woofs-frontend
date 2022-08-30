import { Route, Routes as Switch } from "react-router-dom";

import { CreateProfile } from "../pages/CreateProfile";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
// import { PrivateRoute } from './PrivateRoute'

const Routes = () => (
  <Switch>
    <Route path="/" element={<Main />} />
    <Route path="/createprofile" element={<CreateProfile />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<p>404</p>} />
  </Switch>
);

export default Routes;
