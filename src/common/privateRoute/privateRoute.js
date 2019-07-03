import React from 'react';

const PrivateRouteComponent = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        true ? <Component {...props} /> : <Redirect to={{
            pathName: '/login', state: {
                from: props.location
            }
        }} />
    }} />
}

export default PrivateRouteComponent;