import React from 'react';

const PrivateRouteComponent = ({ component: Component, ...rest }) => {
    <Route {...rest} render={
        (props) => {
            true ? <Component /> : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location }
                }
                }
            ></Redirect>
        }
    }></Route >
}





























// const PrivateRouteComponent = ({ component: Component, ...rest }) => {
//     return <Route {...rest} render={(props) => {
//         true ? <Component {...props} /> : <Redirect to={{
//             pathName: '/login', state: {
//                 from: props.location
//             }
//         }} />
//     }} />
// }

export default PrivateRouteComponent;