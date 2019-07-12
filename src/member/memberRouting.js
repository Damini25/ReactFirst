import React from 'react';
import MemberDashboard from './memberDashBoard/memberDashboard';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import MainProductListing from './products/products';

class MemberRouting extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="" exact strict component={MainProductListing}></Route>
            </Switch>
        </Router>
    }
}

export default MemberRouting;