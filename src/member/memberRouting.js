import React from 'react';
import MemberDashboard from './memberDashBoard/memberDashboard';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';

class MemberRouting extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="" exact strict component={MemberDashboard}></Route>
            </Switch>
        </Router>
    }
}

export default MemberRouting;