import React from 'react';
import MemberDashboard from './memberDashBoard/memberDashboard';
import {Route,Switch, BrowserRouter} from 'react-router-dom';
import MainProductListing from './products/component/mainProductListing/mainProductListing';
import CartComponent from './products/container/cart/cart';
import ProductDescription from './products/container/productDescription/prodDescription';

class MemberRouting extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path={this.props.match.url} exact  component={MainProductListing}></Route>
                <Route path="/member/product/:id" exact strict component={ProductDescription}></Route>
                <Route path={this.props.match.url +"/cart"} exact strict component={CartComponent}></Route>
            </Switch>
        </BrowserRouter>
    }
}

export default MemberRouting;