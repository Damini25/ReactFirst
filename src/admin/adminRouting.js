import React from 'react';
import AdminDashboard from './adminDashboard/adminDashboard';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';

class AdminRouting extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="" exact strict component={AdminDashboard}></Route>
            </Switch>
        </Router>
    }
}

export default AdminRouting;