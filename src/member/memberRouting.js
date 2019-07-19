import React from 'react';
import MemberDashboard from './memberDashBoard/memberDashboard';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import MainProductListing from './products/products';
import CartComponent from './products/cart/cart';

class MemberRouting extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="" exact strict component={MainProductListing}></Route>
                <Route path="member/cart" exact strict component={CartComponent}></Route>
            </Switch>
        </Router>
    }
}

export default MemberRouting;