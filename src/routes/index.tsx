import { Routes as Switch, Route } from 'react-router-dom'
// import { PrivateRoute } from './PrivateRoute'

import { Main } from '../pages/Main'
import { CreateProfile } from '../pages/CreateProfile'
import { Login } from '../pages/Login'

const Routes = () => (
    <Switch>
        <Route path='/' element={<Main />} />
        <Route path='/createprofile' element={<CreateProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<p>404</p>}/>
    </Switch>
)

export default Routes