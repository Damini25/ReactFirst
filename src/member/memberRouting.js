import React, { Suspense } from 'react';
import MemberDashboard from './memberDashBoard/memberDashboard';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import MainProductListing from './products/component/mainProductListing/mainProductListing';
// import CartComponent from './products/container/cart/cart';
//import ProductDescription from './products/container/productDescription/prodDescription';
import PrivateRoute from '../common/privateRoute/privateRoute';
import AsynchComponent from '../common/hoc/asynchComponent';
import HookAppComponent from './hooks/hookApp';

const AsynchCartComponent = AsynchComponent(() => {
    return import('./products/container/cart/cart');
});
// const AsynchProductDescriptionComponent=AsynchComponent(()=>{
//     return import('./products/container/productDescription/prodDescription');
// });
const AsynchProductDescriptionComponent = React.lazy(() => {
    return import('./products/container/productDescription/prodDescription');
});
class MemberRouting extends React.Component {
    render() {
        return <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <PrivateRoute path={this.props.match.url} exact strict component={MainProductListing}></PrivateRoute>
                    {/* <PrivateRoute path="/member/product/:id" exact strict
                 component={AsynchProductDescriptionComponent}></PrivateRoute> */}
                    <Route path="/member/product/:id" exact strict
                        render={() => 
                            <Suspense fallback={<div>Loading...</div>}><AsynchProductDescriptionComponent {...this.props}/></Suspense>
                        }></Route>
                    <PrivateRoute path={this.props.match.url + "/cart"} exact strict component={AsynchCartComponent}></PrivateRoute>
                    <PrivateRoute path={this.props.match.url + "/todo"} exact strict component={HookAppComponent}></PrivateRoute>

                    <Redirect from="/" to="/member"></Redirect>
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    }
}

export default MemberRouting;