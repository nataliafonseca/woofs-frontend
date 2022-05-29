import { Routes as Switch, Route } from 'react-router-dom'
// import { PrivateRoute } from './PrivateRoute'

import { Main } from '../pages/Main'
import { CreateProfile } from '../pages/CreateProfile'

const Routes = () => (
    <Switch>
        <Route path='/' element={<Main />} />
        <Route path='/createprofile' element={<CreateProfile />}/>
        <Route path='*' element={<p>404</p>}/>
    </Switch>
)

export default Routes