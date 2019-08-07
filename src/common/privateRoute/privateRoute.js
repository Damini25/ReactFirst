import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

const PrivateRouteComponent = ({ component: Component, ...rest }) => {
  //  console.log('privateRoute1 rest', rest);
    return <Route {...rest} exact strict render={
        (props) => {
            console.log('privateRoute2 props', props);
           return false ? <Component {...props} /> : <Redirect
                to={{
                    pathname: '/orderEntry',
                    state: { from: props.location }
                }
                }
            ></Redirect>
        }
    }></Route >

}
export default PrivateRouteComponent;