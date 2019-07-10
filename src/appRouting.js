import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './login/login';
import LoginHome from './loginhome/loginhome';
import Signup from './signup/signup';
import AdminRouting from './admin/adminRouting';
import MemberRouting from './member/memberRouting';
import Notfound from './common/notFoundComponent/notfound';
import PrivateRoute from './common/privateRoute/privateRoute.js';

const AppRoutes = () => {
    return <Router>
        <Switch>
            <Route path="/" exact strict component={LoginHome} ></Route>
            <Route path="/login" exact strict component={Login} ></Route>
            <Route path="/signup" exact strict component={Signup}></Route>
            <PrivateRoute path="/member" exact strict component={MemberRouting}></PrivateRoute>
            <PrivateRoute path="/admin" exact strict component={AdminRouting}></PrivateRoute>
            {/* <Route path="/member" exact strict component={MemberRouting}></Route>
            <Route path="/admin" exact strict component={AdminRouting}></Route> */}
            <Route component={Notfound}></Route>
        </Switch>
    </Router>
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