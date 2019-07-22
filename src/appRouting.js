import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './login/login';
import LoginHome from './loginhome/loginhome';
import Signup from './signup/signup';
import AdminRouting from './admin/adminRouting';
import MemberRouting from './member/memberRouting';
import Notfound from './common/notFoundComponent/notfound';
import PrivateRoute from './common/privateRoute/privateRoute.js';
import CartComponent from './member/products/container/cart/cart';
import {Link,NavLink} from 'react-router-dom';
const AppRoutes = () => {
    return <BrowserRouter>
        <div>
            <header>Welcome Damini
                <nav>
                    <ul>
                        <li>
                            <NavLink  to={{pathname:"/signup"}}>Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: "/member" }}>Home</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        <Switch>
            <Route path="/" exact strict component={LoginHome} ></Route>
            <Route path="/login" exact component={Login} ></Route>
            <Route path="/signup" exact strict component={Signup}></Route>
            <PrivateRoute  strict path="/member" component={MemberRouting}></PrivateRoute>
            <PrivateRoute path="/admin" component={AdminRouting}></PrivateRoute>
            <Route component={Notfound}></Route>
        </Switch>
    </BrowserRouter>
}
/*class App extends React.Component {
    render() {
        <Router>
            <Switch>
                <Route path="/" exact strict component={Login} ></Route>
                <Route path="/signup" exact strict component={Signup}></Route>
                <Route component={Notfound}></Route>
            </Switch>
        </Router>
    }
}*/
export default AppRoutes;